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
  id: number;
  cityFrom: string;
  cityTo: string;
  loadedDate: string;
  unloadedDate: string;
  cost: number;
  weight: string;
  type: IOrderType;
}

export type IOrderType = 'waiting' | 'closed' | 'way';
