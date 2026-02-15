import React from 'react'
import AboutUs from '../components/About'
import OurProgram from '../components/OurProgram'
import EducationHighlights from '../components/EducationHighlights'
import AboutUsHighlights from '../components/AboutUsHighlights'

const AboutPage = () => {
  return (
    <div className='mt-16'> 
        <AboutUs />
        <AboutUsHighlights />
        <OurProgram />
        <EducationHighlights />
    </div>
  )
}

export default AboutPage