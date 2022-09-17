import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context/StateContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateContextProvider>
     <Router>
     < App />
      </Router> 
   
   </StateContextProvider>,
    
);



