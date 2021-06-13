import React, { useState, useEffect, createContext, useContext } from 'react'

export const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const [loading, setLoading] = useState(false);
    
    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser, loading, setLoading , useAuth}}>
            {!loading && children}
            </AuthContext.Provider>
    )
}

export default AuthProvider
