import React from 'react'
import { Card ,CardActions,CardMedia,CardContent,Button, Typography } 
from '@mui/material';
import Tours_Info from './Tours_Info';


export default function Tours_Only_RowDisplay(props) 
{

  return (
    <div>
    <Card sx={{ maxWidth: 650 , marginBottom : 2  }}
              >
              <CardMedia
              component="img"
              alt={props.value.name}
              height="350"
              image={props.value.image}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div"  sx={{ flexGrow: 1 }}>
                  {props.value.name}

                  <Button sx={{ color: 'primary.main'}} 
                  className='me-auto'>
                    ${props.value.price}
                    </Button>
                
                </Typography>

                  <Tours_Info infoValue ={props.value.info} />
                
              </CardContent>

                <CardActions style={{display: 'flex' , justifyContent: 'center'}}>
                  <Button  variant="outlined" color='error' className='w-50' 
                  onClick={()=> {props.deleteBtn(props.value.id)}}>
                  Not Intrested</Button>
                </CardActions>
            </Card>
    </div>
  )
}
