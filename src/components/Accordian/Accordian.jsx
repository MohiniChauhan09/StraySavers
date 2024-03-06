import React from 'react'
import { useState } from 'react'
import { questions } from './api.js'
import './Accordian.css'
import MyAccordian from './MyAccordian.jsx'

function Accordian() {
  const [data,setData] = useState(questions)
  return (
    <>
      <section className='main-div'>
        <h1>Frequently Asked Questions</h1>
        <div className='questions'>
          {
            data.map( (curEle) =>{
              console.log(curEle.id)
              const {id} = curEle;
              return <MyAccordian key={id} {...curEle} />
            })
          }
        </div>
        

      </section>
    </>
  )
}

export default Accordian