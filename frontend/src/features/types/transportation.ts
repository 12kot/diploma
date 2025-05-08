export interface ITransportation {
  cargo: {
    id: number;
    loadApproach: 'FTL' | 'LTL';
    loadMethod: 'ABOVE' | 'BEHIND' | 'SIDE';
    name: string;
    packaging: 'BAG' | 'BOX' | 'PALLET' | 'TAPE';
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
