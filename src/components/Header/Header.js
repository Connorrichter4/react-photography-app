import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header(props) {
	const headerStyles = {
        paddingTop: '15rem',
        paddingBottom: '5rem',
		backgroundImage:
			'url(https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};
	return (
		<header style={props.location.pathname==='/' ?headerStyles: {}}>
			<div className='header-container'>
				{props.location.pathname !== '/' && (
					<Link to='/' className='home-button'>
						Home
					</Link>
				)}
				<SearchBar />
			</div>
		</header>
	);
}

export default Header;
