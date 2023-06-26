import React, { useState } from 'react';
import data from './B_Data';
import { List, ListItem , ListItemText , Avatar , Button,Card} from '@mui/material';


export default function Display_BirthData() 
{
     const [displayedData, setDisplayedData] = useState(data)
     
     const today = new Date();
     const todayDate = today.getDate();
     const todayMonth = today.getMonth() + 1;  // month starts from 0 so we add 1

     const filteredData =  displayedData.filter((value)=>
     {
          const birthdate = value.birthdate.split('-');

          

          const birthDate_Day = parseInt(birthdate[0]);
          const birthDate_Month = parseInt(birthdate[1]);

          /* or we can write :- here 1st argument ondicate data in 
          indexwise & 2nd argument indicate convert date-string into decimal */

          // const birthDate_Day = parseInt(birthdate[0] , 10);
          // const birthDate_Month = parseInt(birthdate[1] , 10)

          return birthDate_Day === todayDate && birthDate_Month === todayMonth;
     })

     console.log(filteredData);

     const clearAllData = ()=>
     {
          setDisplayedData([]);
     }

   return (
    <div style={{display: 'flex' , justifyContent : 'center' , backgroundColor:'#ff80aa'}}>
              
              
              <Card style={{ width: 400, height: 500, margin: 10, backgroundColor: 'white' }}>
              <List>
             {
               filteredData.map((v)=>
             {
               return(<ListItem key={v.id}>
                    
                         <Avatar alt={v.name} src={v.image} />
                         <ListItemText  primary={v.name} secondary={v.birthdate} 
                         className='ms-2' />
                         
                         
                     </ListItem>)
             })
             }
             <div className='d-grid m-3'>
                                
               <Button variant='contained' style={{backgroundColor : '#ff80aa'}} 
               onClick = {clearAllData}> Clear All</Button>
                         
             </div>
             
             </List>
              </Card>
              
     </div>
  )
}


