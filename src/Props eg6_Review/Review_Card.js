import React from 'react';
import { Card , Avatar,IconButton ,CardContent,Typography , Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Tours_Info from '../props eg4_Tours/Tours_Info';
import { Button } from 'react-bootstrap';





export default function Review_Card({review,onPrevious,onNext,onReset}) 
{
  
  const { name, job, image, text } = review;

  return (
    <div className='mt-2'>
      <Card  sx={{ maxWidth: 700, 
                   height : '500px' , 
                   margin: 'auto' ,
                   padding: '50px' 
                }}
      >
      
            <Avatar 
               alt= {name}
               src= {image}
                sx={{ width: 180, 
                      height: 180, 
                      margin:'auto' , 
                      display:'block' 
                    }}
            />
          

      <CardContent>
        
        <Typography variant="h6" component="h2" 
          sx={{fontWeight:600,textAlign:'center'}}>
          {name}
        </Typography> 
        
        <Typography variant="subtitle1"   component="div"
        sx={{ mb : 2 , 
              textAlign:'center' , 
              color:"Highlight"
            }}>
        
          {job}
        </Typography>

        <Typography variant="body1" component="p">
        {/* {text} */}
           <Tours_Info infoValue = {text}/>
        </Typography>

      </CardContent> 

        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={onNext}>
            <ChevronLeft color='primary' />
          </IconButton>

          <IconButton onClick={onPrevious}>
            <ChevronRight  color = 'primary'/>
          </IconButton>
        </Grid>
          
          
          
          <div style={{display:'flex', 
                       justifyContent:'center' ,
                       alignItems:'center'}}>

            <Button onClick={onReset}>
            Surprise Me</Button>
          </div>
        
        
      </Card>
    </div>
  )
}
