import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const UserItem = ({user}) => {
    const navigate = useNavigate()
    return (
            <div className="row" sx={{display:"inline-flex"}}>

            <Card sx={{ padding: "10px", margin: "10px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
              Name:{user.name}
              </Typography>
              <Typography variant="h5" component="div" >
              Position:{user.position}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Expirience:{user.expirience} years
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=> navigate(`/details/${user.id}`)}>Details</Button>
            </CardActions>
          </Card>
            </div>
    );
};

export default UserItem;