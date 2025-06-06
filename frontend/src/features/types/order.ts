export interface ICargo {
  id: number;
  loadApproach: 'FTL' | 'LTL';
  loadMethod: 'ABOVE' | 'BEHIND' | 'SIDE';
  name: string;
  packaging: 'BAG' | 'BOX' | 'PALLET' | 'TAPE';
  size: {
    depth: number | null;
    height: number | null;
    id: number | null;
    weight: number | null;
    width: number | null;
  };
}

export interface IAddress {
  apartment: number;
  cityName: string;
  countryName: string;
  house: number;
  id: number;
  phoneNumber: string;
  street: string;
}

export interface IOrder {
  cargo: ICargo;
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
    date: string;
    id: number;
    loadType: 'AUTOMATED' | 'MANUAL';
  };
  payment: {
    date: string;
    deadline: string;
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

export type IOrderType = 'waiting' | 'closed' | 'way';
