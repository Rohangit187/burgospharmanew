import React from 'react'
import ContactForm from './ContactForm'
import Navbar from './Navbar'
import Footer from './Footer'
import CompanyContactInfo from './CompanyContactInfo'
function ContactFormpage() {
  return (
    <div>
            <Navbar />

      <ContactForm />
      <CompanyContactInfo />

      <Footer />
      
    </div>
  )
}

export default ContactFormpage
