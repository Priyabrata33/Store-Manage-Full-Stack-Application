import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function StoreManageCards(props) {
  return (
    <NavLink to={`user/${props.storeDetailObj.sName}`}> 
      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image="https://img.freepik.com/free-vector/people-buying-online_24908-55875.jpg?w=740&t=st=1706453698~exp=1706454298~hmac=a63c5797486018ba2abf3a96b7e4caee44656cd71860fa55f8debcae0cc63ad1"
            alt="SoreName"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign:"center"}}>
              {props.storeDetailObj.sName}
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
