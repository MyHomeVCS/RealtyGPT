export enum ESupportedLanguages {
  armenian = 'armenian',
  english = 'english',
  russian = 'russian',
}

export interface IInitUser {
  userId: string;
  sessionId: string;
  language: ESupportedLanguages;
}

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

// @Todo need to create generic type
// type a = Record<`$${keyof IApartmentEntity}` | keyof IApartmentEntity, any>;

export interface IFilterFields {
  $apartmentArea: string;
  $roomsCount: string;
  bathrooms: string;
  balcony: string;
  floor: string;
  $commonPrice: string;
  pricePerSquareMeter: string;
}
// export interface IFilterFields {
//   $city: string;
//   $street: string;
//   $roomsCount: string;
//   floor: string;
//   apartmentArea: string;
//   developer: string;
//   housePrice: string;
//   floorsCount: string;
//   pricePerSquareMeter: string;
//   // salary: '';
//   // floorsCount: '';
// }

export interface IAiResponse {
  response: string;
  fields: IFilterFields;
  isPrevFieldsChanged: boolean;
  lang: ESupportedLanguages;
  predefinedQuestionNumber: number | '';
}

export interface IFilterFieldsPartial extends Partial<IFilterFields> {}
