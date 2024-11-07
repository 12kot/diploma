import GoogleMapReact from 'google-map-react';

import { mapMarkerImg } from 'assets';

import styles from './styles.module.scss';

export const Map = () => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{
        lat: 53.893009,
        lng: 27.567444,
      }}
      defaultZoom={13}
      options={{
        fullscreenControl: false,
        keyboardShortcuts: false,
        clickableIcons: false,
        zoomControl: false,
      }}>
      <Marker lat={53.893009} lng={27.567444} />
    </GoogleMapReact>
  );
};

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker = (data: MarkerProps) => {
  console.log(data);
  return (
    <div className={styles.marker}>
      <img src={mapMarkerImg} />
    </div>
  );
};
