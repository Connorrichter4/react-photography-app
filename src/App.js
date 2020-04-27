import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Link } from 'react-router-dom';
import Image from './components/ImagePage/ImagePage';

function App() {
	// const url = 'https://pixabay.com/api/?key=16257314-59ee65c49e224e967ccf64091'
	// fetch(url)
	//   .then(response => response.json())
	//   .then(response => {
	//     console.log(response)
	//   })
	return (
		<>
			<div>
				<Link to='/'>
					<Header />
				</Link>
				<Link to='/image'>
					<h1>Photos</h1>
				</Link>
				<h1>Image Page</h1>
			</div>
			<main>
				<Route path='/' exact={true} />
				<Route path='/image' component={Image} />
			</main>
		</>
	);
}

export default App;
