import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Image from './components/ImagePage/ImagePage';
import Header from './components/Header/Header';
import { Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	const [images, setImages] = useState([]);

	const [searchOptions] = useState({
		key: process.env.REACT_APP_PHOTO_KEY,
		type: 'photo',
		limit: 20,
		url: 'https://pixabay.com/api/',
	});

	const [searchString, setSearchString] = useState('');
	

	useEffect(() => {
		getImages(searchString);
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getImages(searchString) {
		let url =
			searchString === ''
				? `${searchOptions.url}?key=${searchOptions.key}`
				: `${searchOptions.url}?key=${searchOptions.key}&q=${searchString}&image_type=${searchOptions.type}&per_page=${searchOptions.limit}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.hits);
				setSearchString('');
			});
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	let history = useHistory();
	function handleSubmit(event) {
		event.preventDefault();
		
		getImages(searchString);
		history.push(`/results/${searchString}`);
	}

	return (
		<>
			<Route
				path='*'
				render={(routerProps) => {
					return (
						<Header
							pathname={routerProps.location.pathname}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							searchString={searchString}
						/>
					);
				}}
			/>
			<main>
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return (
							<Home
								images={images}
								searchString={searchString}
							/>
						);
					}}
				/>
				<Route
					path='/image/:id'
					render={(routerProps) => {
						return <Image id={routerProps.match.params.id} images={images} />;
					}}
				/>
				<Route
					path='/results/:string'
					render={(routerProps) => {
						return (
							<Home
								images={images}
								searchString={routerProps.match.params.string}
								getImages={getImages}
							/>
						);
					}}
				/>
			</main>
		</>
	);
}

export default App;
