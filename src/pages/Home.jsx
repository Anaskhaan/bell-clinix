import { useEffect } from "react";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel ";
import Stats from "../components/Stats";
import Vision from "../components/Vision";
import WeAre from "../components/WeAre";
import ContactForm from "../components/ContactForm";
import Services from "../components/Service";
import FAQs from "../components/FAQs";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
