import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Photos from '../Photos/Photo';

function Home() {
	return (
		<main>
			<div className='home-page'>This is the homepage</div>
			<Link to='/image'>Photos Go Here</Link>
		</main>
	);
}

export default Home;
