import React , { useState, useEffect } from 'react';
import { Typography} from '@mui/material';


import axios from 'axios';

import Tours_Only_RowDisplay from './Tours_Only_RowDisplay';



export default function Tours_Api_Display() {
  const [tours, setTours] = useState([]);
  const [showMsg , setShowMsg] = useState(false);

  
    const fetchTours = async () => 
    {
      try 
      {
        const response = await axios.get('https://course-api.com/react-tours-project');
        
        console.log(response.data);
        setTours(response.data);
      } 
      
      catch (error) 
      {
        setShowMsg(true);
      }
    };

  useEffect(() => 
  {
    fetchTours();
  }, []);


  // for no Tours Left
  const RefreshTours = () => 
  {
    
    fetchTours();
  };

  if (showMsg) 
  {
    return <div>Loading...</div>;
    //return <div>Error fetching data. Please try again later.</div>;
  }

  if(tours.length === 0)
  {
    return (
      <div className='text-center'>
         
          
            <b><h2 className='mt-5'>No Tours Left</h2></b>
            <button onClick={RefreshTours} 
            className='btn btn-primary btn-sm mt-2'><b>Refresh</b></button>
          
        
      </div>
    );
  }


  //    for remove the tour by click on Not Intrested button

  const HandleRemoveTour =(id)=>
  {
    const updatedTours =  tours.filter((value)=>
    {
         return value.id !== id
         
    })

     setTours(updatedTours);
  }

  
  return (
    <div className=" row m-3">
        <div className='col-sm-3'> </div>

        
            <div className='col-sm-6'> 
            <Typography gutterBottom variant="h4" component="div" 
            className='text-center'>
                  Our Tours
            </Typography>
            {
              tours.map((value , index)=>
              {
                return(<Tours_Only_RowDisplay value={value} index={index} 
                deleteBtn={HandleRemoveTour}/>)
              })
            }
     </div>

     
    </div>
  )
}
