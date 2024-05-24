import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

import STUDY_SPOTS from './data/studyspots.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App spotData={STUDY_SPOTS}/>
  </React.StrictMode>
);

