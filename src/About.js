import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './contextapi/ProductContext'

const About = () => {

  const data = {
    name: "about",
  }

  // const {myname} = useContext(AppContext)
  const {myname} = useProductContext()



  return (
    <>
    {/* {myname} */}
    <HeroSection mydata = {data}/>
    </>
  )
}

export default About