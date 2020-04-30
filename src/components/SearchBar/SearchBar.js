import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

function SearchBar(props) {
	const { handleSubmit, handleChange, searchString } = props;
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				type='text'
				name='searchString'
				required
				placeholder='Search'
				onChange={handleChange}
				value={searchString}
			/>
			{/* <Link to={`/results/${searchString}`} className='submit'> */}
			<button type='submit' className='submit'>
				Submit
			</button>
			{/* </Link> */}
		</form>
	);
}
export default SearchBar;
