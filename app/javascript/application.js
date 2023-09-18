// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom/client';
import "@hotwired/turbo-rails"
import "./controllers"
import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);