import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/About'
import OurProgram from './components/OurProgram'
import CurriculumActivities from './components/CurriculumActivities'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './components/Contact'
 /* import FloatingCall from './components/FloatingContact'*/
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Gallerpage from './pages/Gallerpage'

const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Gallery" element={<Gallerpage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
     </Routes>
{/* <FloatingCall /> */}
     <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

export default App