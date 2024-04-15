import React from 'react'
import UserContext from './UserContext'
import { useState, useEffect } from 'react';

const UserContextProvider = ({children}) => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        fetch('https://localhost:4000/stores/getAllStore') //here the URL for the of All store manaement 
        .then((response)=>  response.json())
        .then((storeData)=> setStores(storeData))
        .catch((error)=> console.log(error));
      },[]);
        // console.log(stores);
    return(
        <UserContext.Provider value={{stores, setStores}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider