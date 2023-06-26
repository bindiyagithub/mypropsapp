import React from 'react'

export default function Person(props) {
  return (
    <div>
     
         <h2 className='text-danger text-center mt-3'> 
         {props.name} {props.lname} leaves here.... </h2> 

    </div>
  )
}
