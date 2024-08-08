import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Site from './Site/Site.js';

var site = document.getElementById('site');
var root = ReactDOM.createRoot(site);
root.render(<Site />);
