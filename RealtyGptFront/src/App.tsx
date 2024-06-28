import './App.css';
import '../node_modules/flag-icons/css/flag-icons.min.css';

import { Chat } from 'src/components/chat';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/store';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Chat />
      </PersistGate>
    </Provider>
  );
};
