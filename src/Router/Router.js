import React from 'react';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Home from '../components/Home';

const Router =() =>{
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
      </BrowserRouter>
}

export default Router;