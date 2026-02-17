// import React, { createContext, useContext, useState } from 'react'

// export const AuthContent = createContext();

// export default function authProvider({children}){
//     const initialAuthUser = localStorage.getItem("user");
//     const[authUser, setAuthUser]= useState(
//         initialAuthUser?JSON.parse(initialAuthUser):undefined
//     )
//     return(
//         <AuthContent.Provider value={[authUser,setAuthUser]} >
//             {children}
//         </AuthContent.Provider>
//     )

// }
// export const authUser =()=>useContext(AuthContent);

import React, { createContext, useContext, useState } from 'react'
export const AuthContent = createContext();

// 1. Component name should be capitalized: AuthProvider not authProvider
export default function AuthProvider({children}){
    const initialAuthUser = localStorage.getItem("user");
    const[authUser, setAuthUser]= useState(
        initialAuthUser?JSON.parse(initialAuthUser):undefined
    )
    return(
        <AuthContent.Provider value={[authUser,setAuthUser]} >
            {children}
        </AuthContent.Provider>
    )
}

export const authUser = () => useContext(AuthContent);