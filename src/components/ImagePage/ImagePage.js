import React from 'react';
import Related from '../RelatedPhotos/RelatedPhotos';
import './ImagePage.css';

function ImagePage(props) {
	let currentImage = {};
	props.images.forEach((image) => {
		if (image.id === parseInt(props.id)) {
			currentImage = image;
		}
	});
	return (
		<>
			<div className='image-container'>
				<img className='single-image' src={currentImage.largeImageURL} alt='' />
				<div className='image-info'>
					<div className='user-name'>
						<h1>{currentImage.user}</h1>
						<img
							className='user-image'
							src={currentImage.userImageURL}
							alt=''
						/>
					</div>
					<div className='image-tags'>
						<p>
							Views: <span className='info'>{currentImage.views}</span>{' '}
						</p>
						<p>
							Favorites: <span className='info'>{currentImage.favorites}</span>{' '}
						</p>
						<p>
							Downloads: <span className='info'>{currentImage.downloads}</span>{' '}
						</p>
						<p>
							Tags: <span className='info'>{currentImage.tags}</span>{' '}
						</p>
					</div>
				</div>
			</div>
			<Related images={props.images} />
		</>
	);
}

export default ImagePage;
