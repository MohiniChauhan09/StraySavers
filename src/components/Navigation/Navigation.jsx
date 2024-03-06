import React from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'
import { IoPaw } from "react-icons/io5";

function Navigation() {
  
  return (
    <>
    <NavContainer className='navbar'>
        <div className='logo'>
            <h3>StraySavers <IoPaw /></h3>

        </div>
        <div className='sections'>
            <ul>
                <li>
                    <NavLink to="/" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >About</NavLink>
                </li>

                <li>
                    <NavLink to="/programs" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Programs</NavLink>
                </li>

                <li>
             
                    <NavLink to="/joinus" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Join Us </NavLink>
                    
                </li>

                <li>
                    <NavLink to="/adopt" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Adopt</NavLink>
                </li>

                <li>
                    <NavLink to="/faq" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >FAQs</NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Contact Us</NavLink>
                </li>

            </ul>
          
        </div>
        
    </NavContainer>

    </>
  )
}

export default Navigation

const NavContainer=styled.nav`
  display:flex;
  box-shadow: 0 1px 8px #ddd;
  width:100vw;
  margin-top:0;
  padding:0;
  height:9vh;

  h3{
    font-weight:bold;
    font-size:34px;
  }

  .logo{
    width:20%;
    margin-left:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-shadow: 2px 2px 8px #B4D4FF;
    font-family: 'Trebuchet MS', sans-serif;
    transition: 1s ease-out 100ms;
    &:hover{
      transform: translateX(18px);
    }
  }
  
  .sections{
    padding:0;
  }

  .sections ul{
    display: flex;
    justify-content: flex-end;
    align-items:center;
    margin-left:100px;
    // margin-right:0;
   


  }

  .sections ul li{
    padding: 20px 30px;
    list-style:none;
    font-size:21px;
  
  }

  ul li a{
    text-decoration:none;
    font-family: 'Trebuchet MS', sans-serif;
    padding:10px 10px;
    &:hover{
      color:#070F2B;
      background-color:#90cfe7;
      border-radius:8px;
    }
  }

  .active{
    color:#070F2B;
    background-color:#90cfe7;
    border-radius:8px;
    text-shadow: 2px 2px 8px #B4D4FF;
    font-weight:bold;

  }

  .inActive{
    color:#070F2B;
    text-shadow: 2px 2px 8px #B4D4FF;
    font-weight:bold;
    
  }
  
`


