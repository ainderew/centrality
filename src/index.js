import React from 'react';
import ReactDOM from 'react-dom';
import "./SCSS/global.scss"

import MainContainer from "./Main-Container/main-container.component";

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
