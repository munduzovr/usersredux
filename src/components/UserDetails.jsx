import { useEffect } from "react";
import * as React from 'react';
import { getOneUser, clearOneUserState } from "../store/usersSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserDetails = () => {
    const { oneUser } = useSelector(state => state.users);
    const { id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

    useEffect(()=>{
     dispatch(getOneUser(id));
     return ()=> dispatch(clearOneUserState());
     
     },[]);

     console.log(oneUser)

  return (
    <>
{oneUser ? (
    <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name: {oneUser.name}
        </Typography>
        <Typography variant="h5" component="div">
        position: {oneUser.position}      
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        expirience: {oneUser.expirience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </div>
):(
    <h3>Loading...</h3>
)}
    </>
  )
}

export default UserDetails

