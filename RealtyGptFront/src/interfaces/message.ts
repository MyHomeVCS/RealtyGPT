import { TAiDataResponse } from 'src/interfaces/apartments';
// @Todo add abstraction
// export interface IAbstractMessage <T>{
//   type: T;
//   content:
// }

export enum EMessageRole {
  user = 'user',
  assistant = 'assistant',
}

export interface IMessage {
  role: EMessageRole;
  content: string;
}

export interface IDataMessage {
  type: 'data';
  role: EMessageRole.assistant;
  content: TAiDataResponse;
}
