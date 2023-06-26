import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import House from './props eg2/House';

import Product from './props eg1/Product';
import User_Api_Display from './props eg3_Users/User_Api_Display';

import Tours_Api_Display from './props eg4_Tours/Tours_Api_Display';
import Display_BirthData from './props eg5_BirthDate/Display_BirthData';
import Review_DisplayData from './Props eg6_Review/Review_DisplayData'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <House/> */}
    {/* <Product/> */}

       {/* <Review_DisplayData/> */}
     {/* <User_Api_Display/> */}
     <Tours_Api_Display/>

     {/* <Display_BirthData/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
