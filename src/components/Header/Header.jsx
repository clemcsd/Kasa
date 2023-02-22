import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO_orange.svg';
import './Header.scss'


function Header() {
    
        let activeStyle = {
            textDecoration: "underline"
        }
        return (
        <header>
            <div className='Header'>
                <div>
                    <NavLink className="Logo"><img src={logo} alt='Logo Kasa' /></NavLink>
                </div>    
                    <div className='Navigation'>
                        
                            {/* isActive permet d'indiquer au visiteur sur quel lien il se trouve (lien actif)*/}
                            <NavLink className='Accueil' to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Accueil </NavLink>
                            <NavLink className='APropos' to="/about" style={({ isActive }) =>
                                isActive ? activeStyle : undefined}> A Propos</NavLink>
                        
                    </div>
                
            </div>
        </header>
    )

}

export default Header
