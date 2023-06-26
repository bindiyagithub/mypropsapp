import React from 'react';



export default function Item(props) {
  return (
     <>
      
        <tbody>
         <tr>
         <td> {props.index} </td>
         <td>{props.value.category}</td>
         <td> {props.value.name}</td>
         <td><img src = {props.value.image}  width={100} height={100} />
         </td>
        </tr>   
         </tbody> 
        
     </>
    
  )
}
