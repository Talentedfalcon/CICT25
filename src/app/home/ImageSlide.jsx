import { useState, useEffect } from "react";

const images = [
  "/home_img/slideshow/p1.jpg",
  "/home_img/slideshow/p2.jpg",
  "/home_img/slideshow/p3.jpg",
  "/home_img/slideshow/p4.jpg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 2000);
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl overflow-hidden flex items-center justify-center">
      <img
        src={images[index]}
        className={`w-full h-[300px] md:h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}