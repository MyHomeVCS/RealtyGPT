import { TAiDataResponse } from 'src/interfaces/apartments';
// @Todo add abstraction
// export interface IAbstractMessage <T>{
//   type: T;
//   content:
// }

export interface IMessage {
  role: 'assistant' | 'user';
  content: string;
}

export interface IDataMessage {
  type: 'data';
  role: 'assistant';
  content: TAiDataResponse;
}
