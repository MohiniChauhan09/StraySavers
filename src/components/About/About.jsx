import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <AboutContainer className='container'>


      <div className='left'>
        <div className='box text1'>
          <h2>About Us</h2>
          <p>StraySavers is a passionate and dedicated team committed to making a positive impact on the lives of stray dogs. Founded 2023, we have been tirelessly working towards the well-being and adoption of these loving animals.</p>
        </div>

        <div className='box text2'>
          <h2>Our Mission</h2>
          <p>Our mission is to rescue, rehabilitate, and rehome stray dogs, providing them with a second chance at a happy and healthy life. We strive to create a world where every dog has a loving home and where the community is actively involved in their welfare.</p>
        </div>

      </div>


      <div className='right'>
        <img src="/images/about_dog.jpeg" alt="" />
      </div>
    </AboutContainer>
  )
}

export default About

const AboutContainer=styled.div`
  display:flex;
  justify-content:space-evenly;
  height:88vh;

  .left{
    width:16%;
    padding-left:30;
    margin-top:44px;
  }

  .box{
    width:450px;
    height:250px;
    border:3px ;
    padding:20px;
    margin:30px;
    border-radius:18px;
    box-shadow: 10px 10px 5px #B4D4FF;
    background-color:  #E0F4FF ;
    transition: 1s ease-out 100ms;
    
    &:hover{
      box-shadow: 10px 10px 5px   #E0F4FF;
      background-color:  #B4D4FF;
      transform: translateX(8px);
      transition: transform .6s ease-in-out;
      
    }
    
  }
  // E5E1DA
  // E0F4FF
  // EEF5FF
  
  .right{
    width:30%;
    margin-top:66px;
    padding-left:100px;
    margin-right:50px;
  
  }
  .right img{
    height:560px;
    width:100%;
    border:2px ;
    border-radius:18px;
    box-shadow: 10px 10px 5px #E0F4FF;
    &:hover{
      box-shadow: 0 -10px 20px -5px rgba(115,115,115,0.75),
      -10px 0 20px -5px rgba(115,115,115,0.75);
    }
  }

  h2{
    font-size:35px;
    font-family: 'Trebuchet MS', sans-serif;
    margin-top:30px;
  }

  p{
    font-size:19px;
    font-family: 'Times New Roman', serif;
    margin-top:30px;
  }
`