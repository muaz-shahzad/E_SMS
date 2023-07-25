import React from 'react'
import Navbar from '../Dashboard/Sections/Navbar';
import Section1 from '../Dashboard/Sections/Section1/Section1';
// import Section2 from '../Schedule/Section2'
// import Section3 from '../Schedule/Section3';
// import Section4 from '../Schedule/Section4';
import Section2 from '../Schedule/Sections/Section2/Section2'
import Section3 from '../Schedule/Sections/Section3/Section3'
import Section4 from '../Schedule/Sections/Section4/Section4'

const Schedule = () => {
  return (
    <>
      <Navbar />
      <Section1/>
      <Section2 />
      <Section3/>
      <Section4/>
    </>
  )
}

export default Schedule