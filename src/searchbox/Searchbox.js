import React,{Component} from 'react';
import './Searchbox.css';

const Searchbox = (props) =>{
	
	const onchangeSearch = props.onchangeSearch;

	return(
		<div><input className='search-box' type='search' onChange={onchangeSearch} placeholder='Search...'/></div>
	);
}

export default Searchbox;