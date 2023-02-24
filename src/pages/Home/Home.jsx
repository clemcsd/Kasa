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
      <div class="overflow">
      <HomeBanner/>
      <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;