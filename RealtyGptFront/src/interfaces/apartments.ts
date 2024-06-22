export interface IApartmentEntity {
  img: string;
  address: string;
  number: string;
  apartmentArea: number;
  roomsCount: number;
  bathrooms: number;
  balcony: number;
  floor: number;
  pricePerSquareMeter: number;
  commonPrice: number;
}
export type TAiDataResponse = IApartmentEntity[];
