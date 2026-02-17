// src/Components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, redirectPath = "/Demo" }) => {
    // If the user is NOT logged in, redirect them.
    if (!isLoggedIn) {
        // Redirect to the Demo/Login page
        return <Navigate to={redirectPath} replace />;
    }

    // If the user IS logged in, render the nested component (the Dashboard)
    return <Outlet />;
};

export default ProtectedRoute;