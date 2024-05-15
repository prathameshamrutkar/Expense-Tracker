import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext, createContext } from 'react';

const Protected = ({ children }) => {
    const { user } = useContext(createContext());
    if (!user) {
        return <Navigate to='/' />;
    }

    return children;
};

export default Protected;