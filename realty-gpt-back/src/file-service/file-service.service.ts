// src/json-file/json-file.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as path from 'path';
import { IFilterFields, IFilterFieldsPartial, IApartmentEntity } from 'src/interfaces';
import { getValidFields } from 'src/ai/utils/query.mofifyer';

// '$city': 'Yerevan',
//   '$street': 'Tumanyan Street',
//   '$roomsCount': '3-4',
//   floor: '',
//   apartmentArea: '120-120',
//   developer: '',
//   floorsCount: '',
//   housePrice: '',
//   pricePerSquareMeter: ''
//

const NUMBER_RANGE_TYPE_FIELDS: (keyof IFilterFields | string)[] = ['balcony', 'apartmentArea', 'commonPrice', 'roomsCount', 'bathrooms', 'floor', 'pricePerSquareMeter'];
@Injectable()
export class JSONFileService {
  private readonly filePath = path.join(__dirname, '..', '..', 'static', 'data.json');

  filterData(data: IApartmentEntity[], params: IFilterFields): IApartmentEntity[] {
    const validParams = getValidFields(params);

    return data.filter(entity => {
      const isValid = Object.entries(validParams).reduce((isEqual, [key, value]) => {
        if (!isEqual) {
          return false;
        }
        if (key === 'street') {
          return entity.address.toLowerCase().includes(value.toLowerCase());
        } else {
          const isNumberValue = NUMBER_RANGE_TYPE_FIELDS.includes(key);

          if (isNumberValue) {
            const range = value.split('-');
            const start = +range[0];
            const end = +(range[1] ?? start);

            return +entity[key] >= start && +entity[key] <= end;
          }
          return entity[key].toLowerCase().includes(value.toLowerCase());
        }
      }, true);
      return isValid;
    });
  }
  //   fields {
  //   '$city': 'Yerevan',
  //   '$street': 'Abovyan',
  //   '$roomsCount': '3',
  //   floor: '4',
  //   apartmentArea: '',
  //   developer: '',
  //   floorsCount: '',
  //   housePrice: '',
  //   pricePerSquareMeter: ''
  // }

  async findBy(fields: IFilterFields): Promise<IApartmentEntity[]> {
    const data = await this.readData();

    const filteredData = this.filterData(data, fields);
    // console.log('data', data);
    console.log('filteredData', filteredData);
    return filteredData;
  }

  async readData(): Promise<any> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      throw new Error(`Error reading file: ${err.message}`);
    }
  }

  async writeData(data: any): Promise<void> {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
      throw new Error(`Error writing file: ${err.message}`);
    }
  }
}
