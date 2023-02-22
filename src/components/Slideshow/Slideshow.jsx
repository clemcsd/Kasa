import './Slideshow.scss'
import Vectordroite from '../../assets/Vectordroite.svg'
import Vectorgauche from '../../assets/Vectorgauche.svg'
import { useState } from 'react'

function Slideshow({pictureSlideshow}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const suivPhoto = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === pictureSlideshow.length - 1)
            setCurrentIndex(0)
    }
    const precPhoto = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(pictureSlideshow.length - 1)
        
    }

    return (
        <section style={{backgroundImage : `url(${pictureSlideshow[currentIndex]})`}}>
            {pictureSlideshow.length > 1 &&
            <>
                <img
                    className='vectorright'
                    src={Vectordroite}
                    alt="Vectordroite"
                    onClick={suivPhoto}
                    
                />
                <img
                    className='vectorleft'
                    src={Vectorgauche}
                    alt="Vectorgauche"
                    onClick={precPhoto}
                />
                <p className='slide'>{currentIndex + 1} / {pictureSlideshow.length}</p>
                </>
            }

        </section>
    )
}

export default Slideshow

