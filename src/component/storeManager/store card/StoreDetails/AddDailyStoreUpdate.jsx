import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlusIcon from '@mui/icons-material/Add';
import StoreIcon from '@mui/icons-material/Store';
import Table from './table/Table';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height:200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddDailyStoreUpdate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <div>
          
        </div>
         <div style={{ position: 'fixed', bottom: 10, left: 20 }}>
            <Button variant="contained" startIcon={<PlusIcon />} sx={{ borderRadius: '100px' }}  onClick={handleOpen}>Add Daily Update</Button>    
        </div>
        <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            {/* Add the Form For creation of the Stores and all  */}
            <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                      marginLeft:'20px',
                      height: '40px',
                      width: '150px',
                      borderRadius: '10px'
                    }}
                  >
                  <StoreIcon style={{ color: '#1565c0' }}/>
                  
                  <Typography id="CreateStoreID" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                      Update Daily Sells
                  </Typography>
             </div>
            {/* Form for the Creation of the store with address and name */}
            <h1>Hello</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px' }}>
              <Button variant="contained" >Add Daily Update</Button>
            </div>
        </Box>
      </Modal>
    </>
  )
}

export default AddDailyStoreUpdate
