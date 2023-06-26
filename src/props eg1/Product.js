import React, { useEffect, useState } from 'react'
import Item from '../props eg1/Item'

export default function Product() {
    const[product , setProduct] =  useState([]);

    useEffect(()=>
    {
       fetch("https://pear-shy-caterpillar.cyclic.app/api/products")
       .then(y=>y.json())
        .then(y=>{
          setProduct(y);
     })
    } , []) 
  
    return (
          <div>
            <table className='table table-bordered table-stripped 
                    w-75 table-hover table-warning m-3'>
          {
            product.map((value , index)=>{
             return(<Item  value={value} index={index} key={index}> 
                    </Item>)
            })
          }
          </table>
          </div>
  )
}
