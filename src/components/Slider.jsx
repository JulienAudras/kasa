import React, { useState} from "react"
import arrow_left from "../assets/arrow_left.png"
import arrow_right from "../assets/arrow_right.png"


function Slider({ slides }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) =>
        prevIndex === slides.length -1 ? 0 : prevIndex +1
        );
    }

    return (
      <div className="slider">
        <div className="slider__slide">
            <img 
            src={slides[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            className="slider__slide--img"
            />
            <img 
            src = {arrow_left} 
            alt="slide précédent"
            className="slider__slide--leftArrow"
            onClick={prevSlide}
            />
            <img 
            src = {arrow_right} 
            alt="slide suivant"
            className="slider__slide--rightArrow"
            onClick={nextSlide}
            /> 
            <p className="slider__slide--currentlSlide">
                {currentIndex + 1} / {slides.length}
            </p>
          </div>
        
      </div>
    );
  }
  

export default Slider