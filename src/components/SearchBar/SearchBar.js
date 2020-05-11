import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
	const { handleSubmit, handleChange, searchString } = props;
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				type='text'
				name='searchString'
				required
				placeholder='Search for Images'
				onChange={handleChange}
				value={searchString}
			/>

			<button type='submit' className='submit'>
				Submit
			</button>
		</form>
	);
}
export default SearchBar;
