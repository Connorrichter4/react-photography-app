import React from 'react';
import { Link } from 'react-router-dom'
import './RelatedPhotos.css';

function RelatedPhotos({ images }) {
	const similar = [];
	for (let i = 0; i < 4; i++) {
		similar[i] = images[i];
	}
	return (
		<div className='related-images'>
			<p>Similar Images:</p>
			<div className='related-image-grid'>
				{similar.map((image) => (
					<Link to={'/image/' + image.id} key={image.id}>
						<img
							className='similar-image'
							src={image.largeImageURL}
							alt=''
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default RelatedPhotos;
