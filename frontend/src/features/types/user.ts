import { ILabel } from './label';

export interface IUser {
  id: number;
  name: string;
  role: IUserRole;
  isBanned: boolean;
  labels: ILabel[];
}

export type IUserRole = 'admin' | 'forwarder' | 'driver';
