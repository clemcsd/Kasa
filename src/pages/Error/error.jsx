import Error from '../../components/Error/error'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './errorpage.scss'

function Error404() {
    return (
        <div className='errorpage'>
        <Header/>
        <Error/>
        <Footer/>
        </div>
    )
}

export default Error404