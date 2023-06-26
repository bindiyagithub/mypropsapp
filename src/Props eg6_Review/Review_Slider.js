import React, { useState } from 'react';
import Review_Card from './Review_Card';
import reviews from './Review_Json';


export default function Review_Slider() 
{

     const [index, setIndex] =  useState(0);
     
     // for previous Icon(left icon)
     const handleNext =()=>
     {
          setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
          
     }

     // for next Icon(right icon)
     const handlePrev =()=>{
          setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
          
     }

     // for reset the data by onclick suprise me button 
     const handleResetData =()=>
     {
          setIndex(0);
     }
  return (
     <div>
          
         <Review_Card review={reviews[index] } 
          onPrevious = {handlePrev}  onNext = {handleNext} 
          onReset={handleResetData} />
      
      
    </div>
    
  )
}
