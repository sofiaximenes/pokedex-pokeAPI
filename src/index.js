import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/global.scss"
import Routes from "./routes/Routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
