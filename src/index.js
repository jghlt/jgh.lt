import 'raf/polyfill';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
