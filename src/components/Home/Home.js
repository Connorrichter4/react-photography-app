import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home({ images }) {
	return (
		<div className='gallery'>
			{images.map((image) => (
				<Link to={'/image/' + image.id} key={image.id}>
					<img className='home-image' src={image.largeImageURL} alt='' />
				</Link>
			))}
		</div>
	);
}

export default Home;
