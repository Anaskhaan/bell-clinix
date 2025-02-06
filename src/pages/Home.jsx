import { useEffect } from "react";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel ";
import Stats from "../components/Stats";
import Vision from "../components/Vision";
import WeAre from "../components/WeAre";


const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  } , [])
  return (
    <div>
      <Hero />
    <WeAre />
    <Vision />
    <Stats />
    <ImageCarousel />
    </div>
  );
};

export default Home;
