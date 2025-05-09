import { IAddress, ICargo } from "./order";

export interface ITransportation {
  cargo: ICargo;
  distance: number;
  id: number;
  landing: {
    address: IAddress,
    date: number;
    id: number;
    loadType: 'AUTOMATED' | 'MANUAL';
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
    date: number;
    id: number;
    loadType: 'AUTOMATED' | 'MANUAL';
  };
  payment: {
    date: number;
    deadline: number;
    id: number;
    paymentStatus: 'LATE' | 'ON_TIME' | 'OWE';
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
