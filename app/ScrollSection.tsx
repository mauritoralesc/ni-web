import React, { useRef, useEffect } from "react";

interface ScrollSectionProps {
  children: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const scrollSpeed = Math.max(1, Math.abs(sectionTop / 10));

        if (sectionTop < window.innerHeight * 0.5 && sectionTop > 0) {
          window.scrollBy(0, scrollSpeed);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex container mx-auto justify-center space-x-8 items-center min-h-screen"
      ref={sectionRef}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
