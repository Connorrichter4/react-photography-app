import React, { useEffect, useState } from 'react';
import Related from '../RelatedPhotos/RelatedPhotos';
import './ImagePage.css';

function ImagePage(props) {
	const searchOptions = {
		key: process.env.REACT_APP_PHOTO_KEY,
		url: 'https://pixabay.com/api/',
	};
	const [image, setImage] = useState(null);
	useEffect(() => {
		getImage(props.id);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.id]);

	function getImage(id) {
		const url = `${searchOptions.url}?key=${searchOptions.key}&id=${id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImage(response.hits[0]);
			});
	}
	if (!image) {
		return null;
	}
	return (
		<>
			<div className='image-container'>
				<img className='single-image' src={image.largeImageURL} alt='' />
				<div className='image-info'>
					<div className='user-name'>
						<h1>{image.user}</h1>
						<img className='user-image' src={image.userImageURL} alt='' />
					</div>
					<div className='image-tags'>
						<p>
							Views: <span className='info'>{image.views}</span>{' '}
						</p>
						<p>
							Favorites: <span className='info'>{image.favorites}</span>{' '}
						</p>
						<p>
							Downloads: <span className='info'>{image.downloads}</span>{' '}
						</p>
						<p>
							Tags: <span className='info'>{image.tags}</span>{' '}
						</p>
					</div>
				</div>
			</div>
			<Related tags={image.tags} searchOptions={searchOptions} />
		</>
	);
}

export default ImagePage;
