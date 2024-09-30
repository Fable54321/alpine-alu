import React, { useState, useEffect } from 'react'
import Styles from './Carousel.module.css'
import arrow from '../images/arrow.png'
import { AnimatePresence , motion, useAnimationControls } from 'framer-motion'
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const controls = useAnimationControls();

    useEffect(()=>{
       controls.start({ opacity: [0,1],  transition: { duration: 1.3, ease: 'easeIn' } })
    },[currentIndex, controls])

    const handleNext = () => {
      
       
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );

      
      
    };
    const handlePrevious = () => {
        
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
      setOpacity(0);
    };

    
    console.log(opacity);

    
    
  

  return (
    
       <div className={Styles.productsPicturesBox}>
        <div className={Styles.productsTextBox}>
            <h1>Nos produits</h1>
          </div>
        <div className={Styles.carousel}> 
            <img
              onClick={handlePrevious}
              className={Styles["arrow-prev"]}
              src={arrow}
              alt="arrow Up"
            />
            <AnimatePresence>
            <motion.img
              className={Styles.cap}
              src={images[currentIndex].src}
              alt={images.title}
              initial={{ opacity: 1 }}
              animate={controls}
            />
            </AnimatePresence>
            <img
              onClick={handleNext}
              className={Styles["arrow-next"]}
              src={arrow}
              alt="arrow down"
            />
           </div> 
        <div className={Styles.bottom}>
             <h3>{images[currentIndex].title}</h3>
             <h4>{images[currentIndex].descripiton}</h4>
        </div> 
          </div>
    
  )
}

export default Carousel
