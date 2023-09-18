// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom/client';
import "@hotwired/turbo-rails"
import "./controllers"
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);