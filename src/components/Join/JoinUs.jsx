import React from 'react'
import JoinUsCard from '../JoinUsCard/JoinUsCard'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function JoinUs() {
  let foster='/images/fosterDog.jpeg';
  let support='/images/supportDog.jpeg';
  let volunteer='/images/volunteerDog.jpeg';
  return (
    <>
      <Container className='cards'>
        <JoinUsCard picture={foster} heading={"Foster a Friend"} text={"Open your heart and home to a stray dog in need by becoming a foster caregiver. As a foster parent, you provide temporary shelter, love, and care while we work to find the perfect forever home. Whether you can commit to fostering for a few weeks or several months, your contribution makes a profound impact on the life of a rescue dog. We provide all necessary supplies and support; you provide the love and attention.Contact us today and embark on a rewarding journey of saving lives, one wagging tail at a time."}/>
        <JoinUsCard picture={volunteer} heading={"Volunteer"} text={"We rely on compassionate individuals like you to support our efforts in rescuing and rehoming stray dogs. Whether you can spare a few hours a week or want to get involved in event coordination, fostering, or administrative tasks, your help is invaluable. Join our team and make a real difference in the lives of these deserving animals. Ready to lend a paw? Contact us and become part of our dedicated community of animal lovers! Together, we can give these dogs the second chance they deserve. "}/>
        <JoinUsCard picture={support} heading={"Support Paws"} text={"Help us raise vital funds to support our stray dog rescue and adoption programs. By participating in our fundraisers, you directly contribute to saving and improving the lives of stray dogs in need. From charity auctions and bake sales to virtual events and crowdfunding campaigns, there are many ways to get involved. Every dollar raised goes towards medical care, food, shelter, and finding forever homes for our furry friends. Together, we can give these dogs the love and care they deserve."}/>
      </Container>

      <Button>
        <ul>
          <li>
            <NavLink to="/contact" className={ ( {isActive} )=> isActive ? "active" : "inActive"} >Contact Us</NavLink>
          </li>
        </ul>
       
      </Button>
    </>
  )
}

export default JoinUs

const Container=styled.div`
  height:82vh;
  width:100vw;
  display:flex;
  justify-content:space-evenly;  
`


const Button=styled.div`
width:170px;
margin-top:0;
margin-left:45%;

ul li{
    padding: 12px 20px;
    list-style:none;
    font-size:21px;
    background-color:#90cfe7;
    border-radius:8px;
    border:none;
    transition: 1s ease-out 100ms;
    &:hover{
      color: black;
      background-color:#009bd6;
      border-radius:8px;
      cursor:pointer;
    }
  }

  ul li a{
    text-decoration:none;
    font-family: 'Trebuchet MS', sans-serif;
    padding:10px 10px;
    color:#070F2B;
    font-weight:bold;
    transition: 1s ease-out 100ms;
    &:hover{
      transform: translateX(20px);
      color: black;
      background-color:#009bd6;
      border-radius:8px;
      cursor:pointer;
    }
  }
`