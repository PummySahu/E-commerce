import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            {/* <img src="./images/logo.png" alt="my logo" /> */}
            <div className='head'>
              <h1 className='sahu'>SAHU</h1>
              <h2 className='store'>STORE</h2>
            </div>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}


const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color:${({theme}) => theme.colors.bg};
display: flex;
justify-content:space-between;
align-items:center;
position: relative;
overflow-x:hidden;

.logo{
    height: 5rem;
}
.head{
  background-color:white;
  display:grid;
  width:20rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  padding:5px;
  border: 3px solid black;
  // font-size: 2rem
  gap:5px

}
.sahu{
  padding: 5px;
  background-color: blue;
  font-size: 2.5rem;
  color: white
}
.store{
  font-size: 2.7rem;
  font-weight: 700
}
`


export default Header