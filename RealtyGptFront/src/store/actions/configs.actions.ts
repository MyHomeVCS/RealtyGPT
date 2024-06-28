import { IConfigsStore } from 'src/store/reducers/configs.reducer';
import { EConfigsActionTypes } from 'src/store/actions/actionTypes';
import { AnyAction } from 'redux';

export const setConfigs = (payload: Partial<IConfigsStore>): AnyAction => {
  return {
    type: EConfigsActionTypes.SET_CONFIGS,
    payload,
  };
};
