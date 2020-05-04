import React,{Component} from 'react';
import './Student.css';


const Student = (props) => {
		
	const name = props.name;
	const house = props.house;
	const image = props.image;


	return(
		<div className='hogwarts-student-card'>

			<img className='portrait-image' alt='student' src={image} />
			<h1>{name}</h1>
			<h2>{house}</h2>
			
		</div>
	);
}
export default Student;