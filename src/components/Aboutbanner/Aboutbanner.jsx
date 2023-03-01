import './Aboutbanner.scss'
import aboutbanner from '../../assets/aboutbanner.png'

function HomeBanner() {
    return(
        <section className='Banner'>
            <div className='Banner_image'>
                <img className='Imagepaysage' src={aboutbanner} alt='banner'/>
            </div>
        </section>
    )
}

export default HomeBanner