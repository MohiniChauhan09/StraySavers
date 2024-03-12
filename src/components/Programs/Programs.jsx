import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Programs() {
  return (
    <>
      <ProgramContainer>
        <div className='topic'>
          <h2>Programs</h2>
          <p>Our organisation is currently working towards our Feeding Program, Awareness Program, Rehoming Program, Medical Help Program and Feeding Program. Our time and efforts are divided between these four programs while focusing on our spay & neuter program as that is the most efficient way of making the suffering amongst these animals less and help them lead a happy and healthy life. You can help by supporting one of our programs and help us continue our efforts in lending a helping hand to homeless animals.</p>
        </div>

        <div className='box'>
          <ul>
            <li id='yellow'><NavLink to="/feeding"  >FeedPaws Initiative </NavLink></li>
            <li id='green'><NavLink to="/awareness"   >Public Awareness Drive </NavLink></li>
            <li id='red'><NavLink to="/medical"  >PawsCare Initiative</NavLink></li>
            <li id='grey'><NavLink to="/rehoming"  >StrayToStay Adoption Project </NavLink></li>
          </ul>
        </div>
      </ProgramContainer>
    </>
  )
}

export default Programs

const ProgramContainer=styled.div`
  height:81vh;
  width:100vw;
  .topic{
    padding:40px 100px;
    margin-left:385px;
    margin-top:60px;
    border-radius:50px;
    border: 10px solid #E0F4FF;
    margin-bottom:20px;
    width:50%;
    background-color: #E0F4FF;
    border: 10px solid #c1d8f0;
    transition: 1s ease-out 100ms;
    &:hover{
      background-color: #c1d8f0;
      border: 10px solid #E0F4FF;
      transform: translateY(8px);
    }
  }
  h2{
    font-size:40px;
    margin-bottom:15px;
    margin-left:226px;
  }
  p{
    font-size:18px;
    font-family:  serif;
  }

  .box{
    margin-bottom:50px;
  }

  .box ul{
    display:flex;
    margin-top:40px;
    margin-left:85px;
    width:100%;
  }

  .box ul li{
    padding: 60px 30px;
    list-style:none;
    font-size:21px;
    height:200px;
    width:300px;
    margin:20px;
    border-radius:50px;
    transition: 1s ease-out 100ms;
    &:hover{
      transform: translateY(10px);
    }
  
  }

  .box ul li a{
    text-decoration:none;
    font-family: 'Trebuchet MS', sans-serif;
    padding:40px 10px;
    font-weight:bold;
    cursor:pointer;
    color:black;
  }

  #yellow{
    background-color:#decbb2;
    border:10px solid #d2ad7d;
    &:hover{
      border:10px solid #decbb2 ; 
      background-color:#d2ad7d;
    }
  }

  #green{
    background-color:#a2be9c;
    border:10px solid #798a75;
    &:hover{
      border:10px solid #a2be9c ; 
      background-color:#798a75;
    }
  }

  #red{
    background-color:#e9cdcd;
    border:10px solid #9e8c8c ;
    &:hover{
      border:10px solid #e9cdcd ; 
      background-color:#9e8c8c;
    }
  }

  #grey{
    background-color:#b7dcde;
    border:10px solid #738b8d;
    &:hover{
      border:10px solid #b7dcde ; 
      background-color:#738b8d;
    }
  }
`