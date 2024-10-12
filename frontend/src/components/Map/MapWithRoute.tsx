import GoogleMapReact from 'google-map-react';
import { useEffect, useRef, useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface Props {
  origin: Coordinates;
  destination: Coordinates;
}

export const MapWithRoute = ({ origin, destination }: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);

  useEffect(() => {
    if (!map || !origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();
    directionsServiceRef.current = directionsService;

    const renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(map);

    const request = {
      origin: new google.maps.LatLng(origin.lat, origin.lng),
      destination: new google.maps.LatLng(destination.lat, destination.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && renderer) {
        renderer.setDirections(result);
      } else {
        console.error(`Directions request failed due to ${status}`);
      }
    });

    return () => {
      if (renderer) {
        renderer.setMap(null);
      }
    };
  }, [map, origin, destination]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{ lat: origin.lat, lng: origin.lng }}
      defaultZoom={10}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => setMap(map)}
      options={{
        fullscreenControl: false,
        keyboardShortcuts: false,
        clickableIcons: false,
        zoomControl: false,
      }}
    />
  );
};
