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
		type: 'photo',
		limit: 10,
	});

  const [searchString, setSearchString] = useState('');

	useEffect(() => {
		getImages(searchString);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getImages(searchString) {
		const url = `https://pixabay.com/api/?key=${searchOptions.key}&q=${searchString}&image_type=${searchOptions.type}&per_page=${searchOptions.limit}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				// console.log(url);
				setImages(response.hits);
				setSearchString('');
			});
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
    event.preventDefault();
		getImages(searchString);
		console.log(searchString);
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
        <Route
          path='/results/:string'
          render={(routerProps) => {
            return <Home images={images} searchString={searchString} getImages={getImages} />
          }}
        />
			</main>
		</>
	);
}

export default App;
