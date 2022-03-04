import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; 
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { DarkModeProvider } from './Context/DarkModeContex';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
