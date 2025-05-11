import { IAddress } from './order';

export interface IDelivery {
  address: IAddress;
  loadType: 'AUTOMATED' | 'MANUAL';
  id: number;
  date: string;
}
