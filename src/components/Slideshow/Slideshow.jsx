import { useState } from 'react'
import Vectorgauche from "../../assets/Vectorgauche.svg";
import Vectordroite from "../../assets/Vectordroite.svg";
import "./Slideshow.scss";

export default function Slider({imageSlider}) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const slideSuivante = () => {
      setCurrentIndex(currentIndex + 1)
      if(currentIndex === imageSlider.length - 1)
          setCurrentIndex(0)
  }

  const slidePrecedente = () => {
      setCurrentIndex(currentIndex - 1)
      if(currentIndex === 0)
          setCurrentIndex(imageSlider.length - 1)
  }

  return (
      <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
          {imageSlider.length > 1 && 
              <>
                  <img 
                      className='carousel_fleche carousel_fleche_droite' 
                      src={Vectordroite} 
                      alt="show next slider" 
                      onClick={slideSuivante}
                  />
                  <img 
                      className='carousel_fleche carousel_fleche_gauche' 
                      src={Vectorgauche} 
                      alt="show previous slider" 
                      onClick={slidePrecedente}
                  />
                  <p className='numeroSlide'>{currentIndex + 1} / {imageSlider.length}</p>
              </>
          } 
      </section>
  )
}

