// import React, { useContext } from 'react'
// import { AppContext } from "./context/productcontext"
//due to custome hooks in productcontext.js no need it here..
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext'

const About = () => {

  const  { myName } = useProductContext();

  const data = {
    name: "Ecommerce Store",
};

return( 
  <>
  {myName}
  <HeroSection myData={data} />
  {" "}
  </>);
};


export default About
//rface= react arrow function component export