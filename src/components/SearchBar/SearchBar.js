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
				placeholder='Search'
				onChange={handleChange}
				value={searchString}
			/>
			{/* <button type='submit' className='submit'> */}
				<Link to={`/results/${searchString}`} className='submit'>
					Submit
				</Link>
			{/* </button> */}
		</form>
	);
}
export default SearchBar;
