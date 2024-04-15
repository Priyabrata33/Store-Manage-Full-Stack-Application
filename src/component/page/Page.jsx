import './page.css'
import React, {useState } from 'react';
import { TextField, Button } from '@mui/material';

function SaveAndRetrive(){
    const [num, setNum] = useState();
    const [storeNum, setStoreNum] = useState(null);

    const toStore = (event) => {
        setNum(event.target.value);
      };
      const setValue = (event) => {
        setStoreNum(num);
      };

    return{
        num,
        toStore,
        setValue
    };
}

function Page(){
    const [sum, setSum] = useState(0);
    const calculateSum = () => {
      fetch('https://localhost:4000/fullstack/sumOfAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Response Type:', response.headers.get('content-type'));
          return response.json();
        })
        .then(data => {
          
          setSum(data);
        })
        .catch(error => {
          console.error('Error message', error);
        });
    };
    
    
      function buttonFunction(){
          setValue();
          calculateSum();
      }
 
    const {num,toStore, setValue} = SaveAndRetrive();


    return(
        <div className="page">
            <div className="input">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" className = 'entryField' value={num} onChange={toStore}/>
           <Button variant="contained" className = 'storeButton' onClick={buttonFunction}>Store Value</Button>
        </div>

           <p className='displayText'>Store Value:{sum}</p>

        </div>
       
    )
}

export default Page;
