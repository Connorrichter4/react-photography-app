import React from 'react';

function ImagePage(props) {
	console.log(props)
	const currentImage = props.images.forEach(image => {
		if(image.id === parseInt(props.id)){
			console.log(image.id)
			return {image};
		}
	})
	console.log(currentImage)
	return (
		<>
			<div>This is the Image page</div>
		</>
	);
}

export default ImagePage;
