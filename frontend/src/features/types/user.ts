import { ILabel } from './label';

export interface IUser {
  id: number;
  name: string;
  labels: ILabel[];
}
