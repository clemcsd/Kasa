import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import listeAppartment from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import greyStar from '../../assets/greystar.png'
import pinkStar from '../../assets/pinkstar.png'



function Appartment() {
    const [imageSlider, setImageSlider] = useState([]);

	const idAppartment = useParams('id').id;
	const dataCurrentAccomodation = listeAppartment.filter(data => data.id === idAppartment);
	
	useEffect(() => {
		const dataCurrentAccomodation = listeAppartment.filter(data => data.id === idAppartment);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAppartment]);

	const name = dataCurrentAccomodation[0].host.name.split(' '); 
	const rating = dataCurrentAccomodation[0].rating;
	const description  = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	return (
		<>
			<Header/>
			<Slideshow imageSlider={imageSlider}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? pinkStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}

export default Appartment;