import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import Image from './components/ImagePage/ImagePage';
import Header from './components/Header/Header';

function App() {
	// const url = 'https://pixabay.com/api/?key=16257314-59ee65c49e224e967ccf64091'
	// fetch(url)
	//   .then(response => response.json())
	//   .then(response => {
	//     console.log(response)
	//   })
	return (
		<>
			<Route path='*' component={Header} />
			<Route path='/' exact component={Home} />
			<Route path='/image' component={Image} />
		</>
	);
}

export default App;
