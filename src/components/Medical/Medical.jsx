import React from 'react'
import './Medical.css'

function Medical() {
  return (
    <>
      <div className='panel'>
        <img src="/images/3.jpeg" alt="" />
        <div className='content-medical'>
          <h2>PawsCare Initiative</h2>
          <p>Our commitment extends beyond adoption—we prioritize the health and wellbeing of every stray dog. Here's how our medical help program makes a difference:</p>
          <ul>
            <li><span>Comprehensive Care: </span> We provide thorough medical assessments, vaccinations, and spaying/neutering to ensure each dog is healthy and ready for adoption.</li>
            <li><span>Emergency Assistance:</span> In cases of injury or illness, our program offers immediate medical attention and ongoing care, ensuring the best possible outcome for every dog.</li>
            <li><span>Educational Resources: </span> We empower adopters with knowledge on preventative care and medical needs, promoting lifelong health and happiness for their new furry family member.</li>    
          </ul>
        </div>
      </div>
    </>
  )
}

export default Medical