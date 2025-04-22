import { useEffect } from "react";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel ";
import Stats from "../components/Stats";
import Vision from "../components/Vision";
import WeAre from "../components/WeAre";
import ContactForm from "../components/ContactForm";
import Services from "../components/Service";
import FAQs from "../components/FAQs";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation(); // Get current route location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location.pathname]); // Runs every time the route changes

  return (
    <div>
      <Hero />
      <WeAre />
      <Vision />
      <Services />
      <Stats />
      <ImageCarousel />
      <FAQs />
      <ContactForm />
    </div>
  );
};

export default Home;
