import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import listeAppartment from '../../datas/logements.json'
import './appartment.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import greystar from '../../assets/greystar.png';
import pinkstar from '../../assets/pinkstar.png';



export default function Appartment() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const appartmentId = useParams('id').id;
	const dataCurrentAppartment = listeAppartment.filter(data => data.id === appartmentId);
	
	useEffect(() => {
		const dataCurrentAppartment = listeAppartment.filter(data => data.id === appartmentId);
		setImageSlider(dataCurrentAppartment[0].pictures);
	}, [appartmentId]);

	const name = dataCurrentAppartment[0].host.name.split(' '); 
	const rating = dataCurrentAppartment[0].rating;
	const description  = dataCurrentAppartment[0].description;
	const equipments = dataCurrentAppartment[0].equipments;

	return (
		<>
		<div className="All">
			<Header/>
			<Slideshow imageSlider={imageSlider}/>
			<main className="appartment">
				<div className="appartment_contenu">
					<div className="appartment_contenu_infos">
						<h1 className="appartment_contenu_infos_titre">{dataCurrentAppartment[0].title}</h1>
						<p className="appartment_contenu_infos_titre_location">{dataCurrentAppartment[0].location}</p>
						<div>
							{dataCurrentAppartment[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="appartment_contenu_host">
						<div>
							<div className='appartment_contenu_host_nom'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAppartment[0].host.picture} alt="Propriétaire de l'appartement" />
						</div>
							
						<div className="appartment_contenu_host_etoiles">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? pinkstar : greystar} alt="Etoiles" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="appartment_collapse">
					<div className="appartment_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="appartment_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
			</div>
		</>
	)
}