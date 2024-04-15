import React, { useState, useEffect, useContext } from 'react'
import StoreManageCard from './store card/StoreManageCards';
import './storeManage.css'
import AddButton from './AddButton.jsx';
import AlertMessage from './AlertMessage.jsx';
import UserContext from '../../context/UserContext';

function StoreManage() {
const {stores}  = useContext(UserContext);
const generateCards = (array) => {
  return array.map((stores, index) => {
    return <div key={index} className="card">
        <StoreManageCard storeDetailObj = {stores}/>
      </div>;
  });
};

  return (
   <>     
      {(stores.length===0) && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}>
          <AlertMessage/>
        </div>
      ) }
     
      <div className='storeManage'>
      {generateCards(stores)}
      </div>
     <AddButton/>
   </>
  )
}

export default StoreManage
