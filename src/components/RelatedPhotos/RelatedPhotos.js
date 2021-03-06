import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './RelatedPhotos.css';

function RelatedPhotos({tags, searchOptions}) {
	const [similarImages, setSimilarImages] = useState([]);
	useEffect(() => {
		getImage(tags);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tags]);

	function getImage(tags) {
		const url = `${searchOptions.url}?key=${searchOptions.key}&q=${tags}&page=2&per_page=4&safesearch=true`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setSimilarImages(response.hits);
			});
	}
	if (!similarImages) {
		return null;
	}
	if(!similarImages.length){
		return <p className='no-related-images'>No Related Images Found</p>;
	}

	return (
		<div className='related-images'>
			<p>Similar Images:</p>
			<div className='related-image-grid'>
				{similarImages.map((image) => (
					<Link to={'/image/' + image.id} key={image.id}>
						<img className='similar-image' src={image.largeImageURL} alt={image.tags} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default RelatedPhotos;
