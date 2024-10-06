export interface IProfilePage {
  id: number;
  type: IProfilePageType;
  name: string;
}

export type IProfilePageType = 'general' | 'orders';
