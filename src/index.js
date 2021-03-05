import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <div className="wrapper">
        <div className="wrapper__content">
          <App />
        </div>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);