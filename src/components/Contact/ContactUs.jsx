import React from 'react'
import styled from 'styled-components'


function ContactUs() {
  return (
    <>
      <Container>

        <div className='content'>
          <img src="/images/contactDog.png" alt="" />
          <div className='contact-heading'>
            <h2>Contact Us </h2>
            <p>At our organization, we're passionate about rescuing and rehoming stray dogs. Whether you're looking to adopt, volunteer, or report a stray in need, we're here to lend a helping hand. Together, let's give these deserving pups a second chance at a loving home.
             Contact us today to learn more about our mission and how you can get involved!</p>
          </div>
        </div>

        <div className='form-container'>
          <form action="https://formspree.io/f/mjvnrdlv" method='POST'>
            <input type="text"
            name="Name"
            placeholder='Name'
            autoComplete='off' 
            required />

            <input type="tel"
            name="Mobile no."
            placeholder='Mobile no.'
            autoComplete='off' 
            required />
            
            <input type="email"
            name="Email"
            placeholder='Email'
            autoComplete='off' 
            required />

            <textarea name="Message" cols="60" 
            rows="12"
            placeholder='Message'
            autoComplete='off' 
            required>
            </textarea>

            <input type="submit" value="Send" className='btn'/>

          </form>
        </div>


      </Container>
    </>
  )
}

export default ContactUs

const Container=styled.div`
  height:88vh;
  width:100%;
  display:flex;
  gap:3rem;
  margin-left:68px;
  
  .content{
    height:380px;
    display:flex;
    flex-direction:row;
    gap:3rem;
    padding:20px;
    margin-top:115px;

  }
  .content img{
    height:320px;
    width:340px;
    border-radius:20px;
  }

  .contact-heading{
    width:500px;
  }

  h2{
    font-size:37px;
    margin-left:100px;
  }

  p{
    font-size:21px;
  }

  .contact-heading{
    display:flex;
    flex-direction:column;
    gap:1rem;
  }

  .form-container{
    width:30%;
    height:85%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:47px;
  }

  form{
    display:flex;
    height:76%;
    flex-direction:column;
    gap:1rem;
  }

  input{
    padding:14px;
    border-radius:7px;
    border:none;
    background-color:#decbb2;
    border:none;
  }
  textarea{
    padding:14px;
    border-radius:7px;
    border:none;
    background-color:#decbb2;
    border:none;
  }

  .btn {
    width:150px;
    height:60px;
    margin-top:20px;
    margin-left:34%;
    background-color:#d2ad7d;
    border-radius:29px;
    &:hover{
      background-color: #90cfe7;
      border:none;
      // border:5px solid navy;
      cursor:pointer;
    }
  } 

 
`