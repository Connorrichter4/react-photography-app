import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Image from './components/ImagePage/ImagePage';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	const [images, setImages] = useState([]);

	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_PHOTO_KEY,
	});

	useEffect(() => {
		getImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getImages() {
		const url = `https://pixabay.com/api/?key=${searchOptions.key}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.hits);
			});
	}
	console.log(images);

	return (
		<>
			<Route path='*' component={Header} />
			<main>
				<Route
					path='/'
					exact
					render={() => {
						return <Home images={images} />;
					}}
				/>
				<Route
					path='/image/:id'
					render={(routerProps) => {
						return <Image id={routerProps.match.params.id} images={images} />;
					}}
				/>
			</main>
		</>
	);
}

export default App;
