import React from 'react';
import { Provider } from 'react-redux';
import MainComponent from './components/MainComponent';
import configureStore from './store';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
