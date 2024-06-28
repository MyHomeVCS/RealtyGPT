import { ESupportedLanguages } from 'src/interfaces/configs';
import { EConfigsActionTypes } from 'src/store/actions/actionTypes';
import { AnyAction } from 'redux';

export interface IConfigsStore {
  language: ESupportedLanguages;
}

const configsStateInitialData: IConfigsStore = {
  language: ESupportedLanguages.armenian,
};

export const configsReducer = (state = configsStateInitialData, action: AnyAction) => {
  switch (action.type) {
    case EConfigsActionTypes.SET_CONFIGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
