import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import STUDY_SPOTS from './data/studyspots.json';

const firebaseConfig = {
  apiKey: "AIzaSyD1KANIsqymX8pjxNCsv9j3Qah0DA4AuqY",
  authDomain: "husky-study-hub-2024.firebaseapp.com",
  databaseURL: "https://husky-study-hub-2024-default-rtdb.firebaseio.com",
  projectId: "husky-study-hub-2024",
  storageBucket: "husky-study-hub-2024.appspot.com",
  messagingSenderId: "701868611151",
  appId: "1:701868611151:web:def5895ab3c40fab123c3a"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App spotData={STUDY_SPOTS}/>
    </BrowserRouter>
  </React.StrictMode>
);

