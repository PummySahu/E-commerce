import React from 'react'
import HeroSection from './components/HeroSection'
import Service from './components/Service'
import Trusted from './components/Trusted'
import FeaturProduct from './components/FeaturProduct'

const Home = () => {

  const data = {
    name: "sahu electronics",
  }


  return (
    <>
    <HeroSection mydata = {data}/>
    <FeaturProduct/>
    <Service/>
    <Trusted/>
    </>

  )
  
}



export default Home