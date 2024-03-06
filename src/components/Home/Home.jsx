import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomeContainer>
        <div className='container'>
            <img src="/images/dog.jpeg" alt="" className='bg'/>
            <div className="text">
              <p>Welcome to StraySavers</p>
              <p className='slogan'>where every dog finds a home!</p>
            </div>
        </div>
    </HomeContainer>
  )
}

export default Home

const HomeContainer =styled.div`
width:100vw;
height:88vh;
  .container {
    position: relative;
    text-align: center;
    color: #081F37;
    
  }

  .bg {
    margin:0;
    height:730px;
    width:100vw;;
  }
  
  .text {
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:60px;
    font-weight:bold;
    text-shadow: 2px 2px 8px #526D82;
    font-family: 'Trebuchet MS', sans-serif;
    // transition: 1s ease-out 100ms;
    // &:hover{
    //   transform: translateX(10px);
    // }
  }

  .slogan{
    font-size:35px;
    margin:18px 0;
    color:#35374B;
    text-shadow: 2px 2px 8px #526D82;
    font-family: 'Trebuchet MS', sans-serif;
  }
`