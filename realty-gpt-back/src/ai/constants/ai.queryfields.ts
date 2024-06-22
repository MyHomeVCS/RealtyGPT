import { IFilterFields } from 'src/interfaces';

export const QUERY_FIELDS: IFilterFields = {
  $apartmentArea: 'range value, example 100000-500000',
  $roomsCount: 'range value, example 2-5',
  $commonPrice: 'range value, example 35000000-4500000',
  bathrooms: 'range value, example 1-1',
  balcony: 'range value, example 1-2',
  floor: 'range value, example 4-8',
  pricePerSquareMeter: 'range value, example 350000-380000',
};

// export const QUERY_FIELDS: IFilterFields = {
//   $city: '',
//   $street: '',
//   $roomsCount: ' range value, example 3-4',
//   floor: 'range value, example 3-12',
//   apartmentArea: 'range value, example 120-120',
//   developer: '',
//   floorsCount: 'range value, example 2-5',
//   housePrice: 'range value, example 100000-500000',
//   pricePerSquareMeter: 'range value 1000-3200',
// };
