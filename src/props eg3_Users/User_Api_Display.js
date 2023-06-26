import React, { useEffect, useState } from 'react'

import User_OnlyRows_Display from './User_OnlyRows_Display'
import axios from 'axios'

export default function User_Api_Display() {
     const [apidata , setApiData] = useState([])

     const fetchData = async()=>{
          
        let y = await axios.get("https://jsonplaceholder.typicode.com/users")
            
             try
             {
               if(y.status == 200)
               {
                    setApiData(y.data);
                    console.table(y.data);
               }
             }
             catch(error)
             {
                   console.error(error);
             }
     }

     useEffect(()=>{
           fetchData();
     },[])

  return (

    <div className='m-3'>
    
     
        {
          
          apidata.map((value , index)=>
          {
               return( <User_OnlyRows_Display value = {value}  
                           index = {index}/>)
                
          })

          
        }
        
    </div>
  )
}
