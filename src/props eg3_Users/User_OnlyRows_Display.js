import React from 'react';
import UserFormattedAddress from './UserFormattedAddress';

export default function User_OnlyRows_Display(props) {

  return (
    <div>
      <table className='table table-striped table-success table-hover'>
      <tr>
          {/* <td>{props.index}</td> */}
          <td>{props.value.id}</td>
          <td>{props.value.username}</td>
          <td>{props.value.email}</td>
          <td>
            <UserFormattedAddress addressOfObj ={props.value.address}/>
          </td>
      </tr>
     </table>
    </div>
  )
}
