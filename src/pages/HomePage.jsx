import Hero from "../components/Hero";
import AboutUs from "../components/About";
import OurProgram from "../components/OurProgram";
import CurriculumActivities from "../components/CurriculumActivities";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <OurProgram />
      <CurriculumActivities />
      <Testimonials />
      </div>
  )
}

export default HomePage