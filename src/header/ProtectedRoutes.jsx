import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from 'react-router-dom';
import Login from './Login';


const ProtectedRoutes = () => {
  const { loginWithRedirect,isAuthenticated, } = useAuth0();
  return (
    <div>

      {isAuthenticated?<> <Outlet/></> : <Login/>}
    </div>
  )
}

export default ProtectedRoutes;