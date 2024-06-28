import { combineReducers } from 'redux';
import { configsReducer as configs } from './configs.reducer';

const rootReducer = combineReducers({
  configs,
});

export default rootReducer;
