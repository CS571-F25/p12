import { useState, useEffect } from "react";

export default function PhotoSlideshow({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img
        src={images[index]}
        alt="slideshow"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}