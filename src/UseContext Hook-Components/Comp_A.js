import React from 'react'
import Comp_B from './Comp_B'

export default function Comp_A() {
     /* we call this Comp_A name component in app.js & here we 
     call Comp_B name component  */

  return (
    <div>
        <Comp_B/>
    </div>
  )
}
