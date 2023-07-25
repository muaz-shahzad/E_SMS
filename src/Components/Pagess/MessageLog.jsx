import React from 'react'
import Navbar from '../Dashboard/Sections/Navbar';
import Section1 from '../Dashboard/Sections/Section1/Section1'
import Section2 from '../Message Logs/Sections/Section2/Section2';
import Section3 from '../Message Logs/Sections/Section3/Section3';
import Section4 from '../Message Logs/Sections/Section4/Section4';



const MessageLog = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />


    </>
  )
}

export default MessageLog