import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Achievements from "../components/Achievements/Achievements";
import StepsSection from "../components/StepsSection/StepsSection";
import Testimonials from "../components/Testimonials/Testimonials";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <Achievements />
      <StepsSection />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;