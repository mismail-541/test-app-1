import React,{Component} from 'react';
import './Employee.css';

const Employee = (props) => {
	
	const fullName = props.fullName;
	const jobTitle = props.jobTitle;
	const hireDate = props.hireDate;
	const portrait = props.portrait;


	return (
		<div className='employee-card'>
			<img className='portrait-image' alt ='' src={portrait}/>
			<h1>{fullName}</h1>
			<h2>{jobTitle}</h2>
			<h3>{hireDate}</h3>
		</div>
	);
}

export default Employee;