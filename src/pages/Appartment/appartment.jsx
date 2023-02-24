import Header from '../../components/Header/Header'
//import Footer from '../../components/Footer/Footer'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../components/Error/error'
import listeAppartment from '../../datas/logements.json'
import './appartment.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"




export default function Logement() {
	const { id } = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
	const foundItem = listeAppartment.find((c) => c.id === id);

	setItem(foundItem);
	}, [id]);
	// redirect si foundItem is undefined
	if (!item) {
	return <Error />;
	}

	const listeEquipements = item.equipments.map((e) => <li key={e}>{e}</li>);
	return (
	<>
		<Header />
		<Slideshow pictures={item.pictures}></Slideshow>
		<div className="content">
		<div className="bloc-left">
			<div className="location">
			<b>{item.title}</b>
			<p>{item.location}</p>
			</div>
			<div className="tags">
			<ul>
				{item.tags.map((t) => (
				<li key={t}>{t}</li>
				))}
			</ul>
			</div>
		</div>
			<div className="host">
			<p>{item.host.name}</p>
			<img src={item.host.picture} alt="host" />
			</div>
		</div>
		

		<div className="description">
		<Collapse texte={item.description} title="Description" />
		<Collapse texte={listeEquipements} title="Equipements" />
		</div>
		
	</>
	);
}