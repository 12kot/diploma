export interface IOrder {
  id: number;
  cityFrom: string;
  cityTo: string;
  loadedDate: string;
  unloadedDate: string;
  cost: number;
  weight: string;
  type: 'loading' | 'closed' | 'way';
}
