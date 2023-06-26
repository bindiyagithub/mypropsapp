import React, { useState } from 'react'
import { Typography } from '@mui/material'

export default function Tours_Info(props) {
   const [ readInfo , setReadInfo ] = useState(false)

    const HandleReadInfo = ()=>{
        setReadInfo(!readInfo)
    }

  return (
    
         <Typography variant="body2" color="text.secondary">
          { readInfo ? props.infoValue : 
                `${props.infoValue.slice(0,150)} ...`}
          
          
            <a href='#' onClick={HandleReadInfo} className='text-primary text-decoration-none' >
               { readInfo ? "Show less" : "Read more"} 
             </a> 
          
      
         </Typography>
     
     
    
  )
}
