import React, {useState} from 'react'
import Card from './Card.jsx'

const CardSlider = ({cards}) => {

    const[currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };  


    return(
        <div className="card-slider">
        <button className="slider-btn prev-btn" onClick={prevSlide}>Prev</button>
        <div className="slider-content flex overflow-x-auto space-x-4">
          {cards.map((card, index) => (
            <div key={index} className={index === currentIndex ? "slide active" : "slide"}>
              {/* Render your card component here */}
              <div className="card">
              <Card title={card.title} description={card.description} />
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn next-btn" onClick={nextSlide}>Next</button>
      </div>

    )
}

export default CardSlider;