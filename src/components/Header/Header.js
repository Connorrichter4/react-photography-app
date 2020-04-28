import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header(props) {
	const headerStyles = {
		paddingTop: '15rem',
		paddingBottom: '5rem',
		backgroundImage:
			'url(https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};
	return (
		<header style={props.pathname === '/' ? headerStyles : {}}>
			<div className='header-container'>
				{props.pathname !== '/' && (
					<Link to='/' className='home-button'>
						Home
					</Link>
				)}
				<SearchBar
					handleChange={props.handleChange}
					handleSubmit={props.handleSubmit}
					searchString={props.searchString}
				/>
			</div>
		</header>
	);
}

export default Header;
