import { useEffect, useRef } from "react";
import { Activity } from "lucide-react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursor || !cursorRing) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorRing.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-clicked");
      cursorRing.classList.add("ring-clicked");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-clicked");
      cursorRing.classList.remove("ring-clicked");
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.closest('button, a, input, select, [role="button"]')) {
        cursor.classList.add("cursor-hover");
        cursorRing.classList.add("ring-hover");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      cursorRing.classList.remove("ring-hover");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}>
        <Activity className="w-4 h-4 text-blue-600" />
      </div>
      <div className="cursor-ring" ref={cursorRingRef} />
    </>
  );
};

export default CustomCursor;
