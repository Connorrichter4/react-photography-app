import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header(props) {
	// Hou comment: consider applying the styles by toggling a class on the header on line 17
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
