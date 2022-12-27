import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

export const useAuth=()=>{
  const token=sessionStorage.getItem('token')
  if(token){
    return true
  } else {
    return false
  }
}

const  PrivateRoutes=(props) =>{

  const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/"/>
}

export default PrivateRoutes;
