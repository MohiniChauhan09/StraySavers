import React from 'react'
import styled from 'styled-components'

function AdoptButton() {
  return (
    <Button>
      <button>Adopt me</button>
    </Button>
  )
}

export default AdoptButton

const Button=styled.div`
  button{
    width:300px;
    height:49px;
    margin-top:30px;
    margin-left:22px;
    border-radius:29px;
    background-color: #90cfe7;
    color:navy;
    font-size:20px;
    font-family: 'Trebuchet MS', sans-serif;
    border:none;
    &:hover{
      background-color:#d2ad7d;
      color:black;
      border:none;
      cursor:pointer;
  }

`