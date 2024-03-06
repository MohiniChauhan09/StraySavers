import React from 'react';
import styled from 'styled-components'
import AdoptButton from'../AdoptButton/AdoptButton';

function Adopt() {
  return (
    <>
    <AdoptContainer>
      {/* <div className='card1'>
        
      
        <div className='card-a'>
          <div><img src='/images/a5.jpeg' alt="" /></div>
          <div>
            <h2>Rambo</h2>
            <ul>
              <li><span>Age:</span>3 years</li>
              <li><span>Sex:</span>male</li>
              <li><span>Energy Level:</span>Medium</li>
            </ul>
          </div>
        </div>

        <div className='card-a'>
          <div><img src='/images/a6.jpeg' alt="" /></div>
            <div>
              <h2>Babbar</h2>
              <ul>
                <li><span>Age:</span>2 years</li>
                <li><span>Sex:</span>male</li>
                <li><span>Energy Level:</span>Medium</li>
              </ul>
          </div>
        </div>

      </div>   */}



      <div className='card2'>

        <div className='card-b'>
          <div><img src='/images/a1.jpeg' alt="" /></div>
          <div className='inner-content'>
            <h2>Shimmy</h2>
            <ul>
              <li><span>Age :</span> 2 months</li>
              <li><span>Sex :</span> male</li>
              <li><span>Energy Level :</span> Medium</li>
            </ul>
            <AdoptButton/>
          </div>
        </div>

        <div  className='card-b'>
          <div><img src='/images/a10.jpeg' alt="" /></div>
          <div className='inner-content'>
            <h2>Tutsi</h2>
            <ul>
              <li><span>Age :</span> 2 years</li>
              <li><span>Sex :</span> female</li>
              <li><span>Energy Level :</span> Medium</li>
            </ul>
            <AdoptButton/>
          </div>
        </div>

        <div className='card-b'>
          <div><img src='/images/a6.jpeg' alt="" /></div>
          <div className='inner-content'>
            <h2>Babbar</h2>
            <ul>
              <li><span>Age :</span> 2 years</li>
              <li><span>Sex :</span> male</li>
              <li><span>Energy Level :</span> Medium</li>
            </ul>
            <AdoptButton/>
          </div>
        </div> 

      
    </div>
        

    </AdoptContainer>
      
    </>
  )
}

export default Adopt;

const AdoptContainer=styled.div`
height:89vh;

  .card2{
    margin-left:149px;
    display:flex;
    gap:4rem;
  }
   
  .card-b{
    border:7px solid #c1d8f0;
    height:600px;
    width:420px;
    border-radius:20px;
    background-color: #E0F4FF;
    transition: 1s ease-out 100ms;
    margin-top:20px;
    margin-bottom:35px;

    &:hover{
      background-color: #c1d8f0;
      transform: translateY(8px);
    }
  }

  img{
    height:310px;
    width:355px;
    border-radius:20px;
    margin-top:30px;
    margin-left:26px;
    margin-bottom:20px;
  }

  h2{
    font-size:30px;
    margin-bottom:11px;
  }

  .inner-content{
    margin-left:30px;
  }

  li{
    list-style:none;
    font-size:19px;
  }

  // .card1
  //   margin-left:149px;
  //   display:flex;
  //   gap:4rem;
  // }


`
