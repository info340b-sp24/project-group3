import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import STUDY_SPOTS from './data/studyspots.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App spotData={STUDY_SPOTS}/>
    </BrowserRouter>
  </React.StrictMode>
);

