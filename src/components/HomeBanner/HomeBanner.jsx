import './HomeBanner.scss'
import banner from '../../assets/homebanner.png'

function HomeBanner() {
    return(
        <section className='HomeBanner'>
            <div className='HomeBanner_image'>
                <img className='Imagemontagne' src={banner} alt='banner'/>
                <h2 className='Titre'>Chez vous, partout et ailleurs</h2>
            </div>
        </section>
    )
}

export default HomeBanner