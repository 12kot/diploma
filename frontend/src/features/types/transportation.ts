export interface ITransportation {
  cargo: {
    id: number;
    loadApproach: string;
    loadMethod: string;
    name: string;
    packaging: string;
    size: {
      depth: number;
      height: number;
      weight: number;
      width: number;
    };
  };
  distance: number;
  id: number;
  landing: {
    address: {
      apartment: number;
      cityName: string;
      countryName: string;
      house: number;
      id: number;
      phoneNumber: string;
      street: string;
    };
    date: string;
    id: number;
    loadType: string;
  };
  loading: {
    address: {
      apartment: number;
      cityName: string;
      countryName: string;
      house: number;
      id: number;
      phoneNumber: string;
      street: string;
    };
    date: string;
    id: number;
    loadType: string;
  };
  payment: {
    date: string;
    deadline: string;
    id: number;
    paymentStatus: string;
    price: number;
    user: {
      email: string;
      id: number;
      name: string;
      rating: number;
    };
  };
  user: {
    email: string;
    id: number;
    name: string;
    rating: number;
  };
}
