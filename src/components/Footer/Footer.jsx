import './Footer.scss'
import logofooter from '../../assets/LOGO_footer.svg'

function Footer() {
    return(
        <footer>
            <div className='Basdepage'>
                <img className='Basdepage_logo' src={logofooter} alt='Kasa'/>
                <h2 className='Basdepage_titre'>© 2020 Kasa. All rights reserved</h2>
            </div>
        </footer>
    )
}

export default Footer;