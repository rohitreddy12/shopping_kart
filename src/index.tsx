import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Dropdown from './Practice/Dropdown';
import SearchBar from './Practice/SearchBar';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  
);


