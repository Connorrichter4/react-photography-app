import React from 'react';
import './SearchBar.css';

function SearchBar() {
	return (
		<form className='form-horizontal'>
			<input type='text' name='searchString' placeholder='Search' />
            <button type='submit' className='submit'>Submit</button>
		</form>
	);
}
export default SearchBar;
