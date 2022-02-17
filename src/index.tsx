import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Write from './components/write';
import Read from './components/read';
import View from './components/view'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Welcome from './components/Welcome';



ReactDOM.render(

  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/view" element={<View />} />
          <Route path="/" element={<Welcome />} />
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
