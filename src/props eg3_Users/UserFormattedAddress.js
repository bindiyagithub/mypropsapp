import React from 'react'

export default function UserFormattedAddress(props) {
  return (
    <div>
       <tr>
          <p>{props.addressOfObj.street} , {props.addressOfObj.suite},
          {props.addressOfObj.city}, {props.addressOfObj.zipcode}</p>
       </tr>
    </div>
  )
}
