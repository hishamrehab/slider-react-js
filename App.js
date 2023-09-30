import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "./images";
import "./App.css";
const App = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div
        ref={carouselRef}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="carousel-img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
