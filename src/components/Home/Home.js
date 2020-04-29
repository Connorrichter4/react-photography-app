import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home({ images, searchString, getImages }) {
    console.log(searchString)
    console.log(images)
    console.log(getImages)
	useEffect(() => {
		if(getImages!== undefined){
            getImages(searchString)
        }

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
