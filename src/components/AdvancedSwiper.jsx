import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for class name merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function SwipeButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all hover:bg-background",
        direction === "left" ? "left-4" : "right-4"
      )}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </button>
  );
}

export function InfiniteSwiper({
  items,
  swipeSpeed = 3000,
  transitionDuration = 300,
  pauseOnHover = true,
  showNavigation = true,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const itemsWithClones = [...items, ...items.slice(0, 1)];

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, swipeSpeed);

    return () => clearInterval(interval);
  }, [isPaused, items.length, swipeSpeed]);

  useEffect(() => {
    if (currentIndex === items.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items.length, transitionDuration]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === items.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    if (currentIndex === 0) {
      setCurrentIndex(items.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length - 1);
      }, 0);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none",
        }}
      >
        {itemsWithClones.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {showNavigation && items.length > 1 && (
        <>
          <SwipeButton direction="left" onClick={handlePrev} />
          <SwipeButton direction="right" onClick={handleNext} />
        </>
      )}

      {items.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                currentIndex === index ? "bg-primary w-4" : "bg-muted"
              )}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SwiperDemo() {
  const items = [
    <div
      key="1"
      className="flex h-64 items-center justify-center bg-blue-100 p-6"
    >
      <h3 className="text-2xl font-bold">First Slide</h3>
      <p className="mt-2 text-gray-600">This is the first slide content</p>
    </div>,
    <div
      key="2"
      className="flex h-64 items-center justify-center bg-green-100 p-6"
    >
      <h3 className="text-2xl font-bold">Second Slide</h3>
      <p className="mt-2 text-gray-600">This is the second slide content</p>
    </div>,
    <div
      key="3"
      className="flex h-64 items-center justify-center bg-purple-100 p-6"
    >
      <h3 className="text-2xl font-bold">Third Slide</h3>
      <p className="mt-2 text-gray-600">This is the third slide content</p>
    </div>,
    <div
      key="4"
      className="flex h-64 items-center justify-center bg-amber-100 p-6"
    >
      <h3 className="text-2xl font-bold">Fourth Slide</h3>
      <p className="mt-2 text-gray-600">This is the fourth slide content</p>
    </div>,
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <h1 className="text-3xl font-bold">Infinite Swiper Demo</h1>
      <InfiniteSwiper items={items} />
    </div>
  );
}
