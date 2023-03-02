import './Collapse.scss'
import Chevron from '../../assets/Vector.svg'
import { useState } from 'react'; 



export default function Collapse({title, content}) {
    const [toggle, setToggle] = useState(false); /*Hook d'état pour Collapse*/

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_titre' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'fleche fleche_up' : 'fleche fleche_down'} 
                        src={Chevron} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_contenu' : 'collapse_contenu_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}