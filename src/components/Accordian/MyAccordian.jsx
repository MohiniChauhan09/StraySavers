import React from 'react'
import { useState } from 'react'
import'./Accordian.css'

function MyAccordian({question , answer}) {
  const [show,setshow] = useState(false);
  return (
    <>
      <div className='main-heading'>
        <h3>{question}</h3>
        <p onClick={ ()=>setshow(!show) } > {  show ? "➖" : "➕"  } </p>
        
      </div>
      
      { show && <p className='answers' >{answer}</p>}
      
    </>
  )
}

export default MyAccordian