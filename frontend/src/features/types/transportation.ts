import { IDelivery } from "./delivery";
import { ICargo } from "./order";

export interface ITransportation {
  cargo: ICargo;
  distance: number;
  id: number;
  landing: IDelivery;
  loading: IDelivery;
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
