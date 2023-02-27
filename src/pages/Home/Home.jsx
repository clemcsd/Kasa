import './Home.scss'
import Header from '../../components/Header/Header'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'


// Page d'accueil


function Home() {


  return (
    <div className="Home">
      <Header/>
      
      <HomeBanner/>
      <Card/>
      
      <Footer/>
    </div>
  )
}

export default Home;