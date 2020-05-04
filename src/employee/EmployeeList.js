import React, {Component} from 'react';
import Employee from './Employee.js';
import './Employee.css';

const EmployeeList = (props) => {
	
	//Get the employees collection from the props and load it into a local variable:
	const employees = props.employees;

	//Create an 'Employee.js' object array:
	const employeesArray = employees.map((employee,index)=>{
		return <Employee key={employee.fullName} 
		                 fullName={employee.fullName} 
		                 jobTitle={employee.jobTitle} 
		                 hireDate={employee.hireDate}
		                 portrait={employee.portrait}/>
	});

	return(
		<div className='employee-card-list'>
			{employeesArray}
		</div>
	);

}
export default EmployeeList;