import React,{Component} from 'react';
import Student from './Student.js';
import './Student.css';


const StudentList = (props) => {
	
	const students=props.students;

	const studentsArray = students.map((student,index)=>{

		return <Student key={index} name={student.name} house={student.house} image={student.image}/>
	});

	return(
		<div className='hogwarts-student-card-list'>
			{studentsArray}
		</div>
	);
}
export default StudentList;