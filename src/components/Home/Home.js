import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home({ images, searchString, getImages }) {
	useEffect(() => {
		if (getImages !== undefined) {
			getImages(searchString);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchString]);
	if (!images.length) {
		return <div className='no-images'>No Images Found!</div>;
	}
	return (
		<div className='gallery'>
			{images.map((image) => (
				<Link to={'/image/' + image.id} key={image.id}>
					<img className='home-image' src={image.largeImageURL} alt={image.tags} />
				</Link>
			))}
		</div>
	);
}

export default Home;
