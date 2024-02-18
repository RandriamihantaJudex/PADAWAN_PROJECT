// PrivateRoute.js
import React from 'react';
import {Navigate , Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  
    return <Route
        {...rest}
        element={localStorage.getItem('isConnected')==='true' ? <Component/> : <Navigate to="/login" replace />}
    />
};

export default PrivateRoute;
