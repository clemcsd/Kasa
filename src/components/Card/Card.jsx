import './Card.scss'
import { Link } from 'react-router-dom'
import listeAppartment from '../../datas/logements.json'

function Card() {
    return(
    <section className='Liste'>   
    
            {listeAppartment.map((appartment) => (
                <Link className='Lien' to={`/logement/${appartment.id}`}>
                <img className='Liste_card_image' src={appartment.cover} alt='Logements'/>
                <div className='Description'>
                    <p className='DescriptionTitre'>{appartment.title}</p>
                </div>
                </Link>
            )
            )}
    </section> 
    );
}

export default Card

