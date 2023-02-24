import React, { useState } from "react";
import { useParams } from "react-router-dom";
import listeAppartment from "../../datas/logements.json";
import Vectorgauche from "../../assets/Vectorgauche.png";
import Vectordroite from "../../assets/Vectordroite.svg";
import "./Slideshow.scss";

export default function Caroussel() {
  const { id } = useParams();
  const foundItem = listeAppartment.find((object) => object.id === id);
  const pictures = foundItem.pictures;

  const [current, setCurrent] = useState(0);

  
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

 
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {/* Showing slider navigation buttons */}
      {/* Images */}
      {pictures.map((img, index) => {
        return (
          <div className='image' key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
              
            )}
            <button className="vectorGauche">
              <img src={Vectorgauche} onClick={prevSlide} alt="fleche" />
            </button>
            <button className="vectorDroite">
              <img src={Vectordroite} onClick={nextSlide} alt="fleche" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

