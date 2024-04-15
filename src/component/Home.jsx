import React from 'react'
import Cards from "./cards/Cards.jsx";
import {Link,NavLink} from 'react-router-dom';
import './cards/cards.css';


function Home() {

    const storeObj = { 
        name: "Store",
        imageUrl: "https://img.freepik.com/free-vector/shop-with-open-sign_23-2148554817.jpg?size=626&ext=jpg"
    };
  
      const deliverObj = {
        name: "Delivery",
        imageUrl: "https://motionarray.imgix.net/1908572-6bJLCsGP98-high_0009.jpg?w=660&q=60&fit=max&auto=format"
      };
  
  return (
    <>      
    <div className="justify-center" >
        <NavLink to = '/' className="flex items-center">
            <div className='cards'> 
              <NavLink to="storeMangement" style={{textDecoration:'none'}}>
                <Cards cardDetailObj= {storeObj} />
              </NavLink>
                <Cards cardDetailObj= {deliverObj}/>
            </div>
        </NavLink>
      </div>  
    </>
  )
}

export default Home
