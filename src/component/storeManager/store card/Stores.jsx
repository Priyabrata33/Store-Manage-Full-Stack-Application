import React, { useContext, useState } from 'react'
import AddButton from '../AddButton'
import AddDailyStoreUpdate from './StoreDetails/AddDailyStoreUpdate'
import { useParams } from 'react-router-dom'
import StoreTable from './StoreDetails/table/Table'
import UserContext from '../../../context/UserContext'



export default function Stores() {
 
  const {storeName} = useParams();
  const {stores} = useContext(UserContext);
  
  let store = {};
  for(const check in stores){
    if(storeName===stores[check].sName){
      store =stores[check];
      break;
    }
  }

  return (
    <>
      <StoreTable store = {store}/>
      <AddDailyStoreUpdate/>
    </>
  )
}
