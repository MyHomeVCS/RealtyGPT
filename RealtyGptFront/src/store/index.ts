import { compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'src/store/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const syncEditBetFilter = createFilter('betSlip', ['editBet']);

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['configs'],
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export { store };
