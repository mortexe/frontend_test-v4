import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './styles/index.scss'
import { FilterButtonProvider } from './helpers/FilterContext.js'

ReactDOM.render(<FilterButtonProvider><App /></FilterButtonProvider>, document.getElementById('root'));