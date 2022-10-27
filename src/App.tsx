import React from 'react';
import { Provider } from 'react-redux';
import ActionComponent from './components/ActionComponent';
import configureStore from './store';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ActionComponent />
    </Provider>
  );
};

export default App;
