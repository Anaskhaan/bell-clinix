import { useEffect, useRef, useState } from "react";

const images = [
  "g4.jpg",
  "g1.jpg",
  "g1.jpg",
  "g3.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); 
  const carouselRef = useRef(null);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSlide("next");
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]); 

  const changeSlide = (direction) => {
    if (direction === "next") {
  
      if (isMobile) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {

        if (currentIndex === images.length - 1) {
          setCurrentIndex(0); 
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length 
      );
    }
  };


  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    const moveCarousel = (e) => {
      const touchEnd = e.touches[0].clientX;
      if (touchStart - touchEnd > 50) {
        changeSlide("next");
        window.removeEventListener("touchmove", moveCarousel);
      } else if (touchEnd - touchStart > 50) {
        changeSlide("prev");
        window.removeEventListener("touchmove", moveCarousel);
      }
    };
    window.addEventListener("touchmove", moveCarousel);
  };


  const handleMouseDown = (e) => {
    const mouseStart = e.clientX;
    const moveCarousel = (e) => {
      const mouseEnd = e.clientX;
      if (mouseStart - mouseEnd > 50) {
        changeSlide("next");
        window.removeEventListener("mousemove", moveCarousel);
      } else if (mouseEnd - mouseStart > 50) {
        changeSlide("prev");
        window.removeEventListener("mousemove", moveCarousel);
      }
    };
    window.addEventListener("mousemove", moveCarousel);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveCarousel);
    });
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-64 md:h-64 overflow-hidden"
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
    >
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * (isMobile ? 100 : 30)}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
