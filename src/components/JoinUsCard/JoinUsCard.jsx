import React from 'react';
import styled from 'styled-components';


function JoinUsCard( {picture , heading , text} ) {
  return (
    <>
      <CardContainer>
        
        <div className='all'>
          <h2>{heading}</h2>
          <div className='main-card'>
            <img src={picture} alt="" />
            <p>{text}</p>
          </div>
        </div> 
      </CardContainer>
      
    </>
  )
}

export default JoinUsCard

const CardContainer=styled.div`
  
  .all{
    display:flex;
    flex-direction:column;
    width:400px;
    border-radius:10px;
    height:400px;
    margin-top:20px;
    position:relative;
    
  }

  .all h2{
    position:absolute;
    font-size:26px;
    left:30%;
    transition: 1s ease-out 100ms;
    &:hover{
      transform: translateY(-20px);
      color:navy;
    }
  }

  img{
    height:255px;
    width:360px;
    border-radius:9px;
    margin-bottom:10px;
    margin-left:15px;
  }

  .main-card{
    margin-top:40px;
    padding-top:16px;
    border-radius:10px;
    background-color:#E0F4FF;
    border: 5px solid #c1d8f0;
    transition: 1s ease-out 100ms;
    margin-left:0;
    &:hover{
      transform: translateY(10px);
      background-color:#c1d8f0;
      border: 5px solid #E0F4FFv
    }
    
  }

  p{
    padding:15px;
  }

 
`

