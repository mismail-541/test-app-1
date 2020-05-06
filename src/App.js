import React,{Component} from 'react';

//import style sheet:
import './App.css';

//Employee components:
import {employeesList} from './employee/employees.js';
import EmployeeList from './employee/EmployeeList.js';

//Search box import:
import Searchbox from './searchbox/Searchbox.js';


//Banner image import:
import BannerImage from './bannerimage/BannerImage.js';

//Hogwarts Student's components:
import StudentList from './Hogwarts/StudentList.js';

//Scroll component:
import Scroll from './scroll/Scroll.js';

//Import the error handler, AKA Error Boundary:
import ErrorBoundary from './ErrorBoundary.js';

class App extends Component{

    constructor(){
      super();

      this.state = {

        employeesList: employeesList,
        studentsList: [],
        searchTerm: ''
          
      }
    }



  

    componentDidMount(){
      console.log('check');

      fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response=> response.json())
      .then(studentsList => this.setState({studentsList: studentsList}))


      
    }





    onchangeSearch = (event) =>{

     
      this.setState(
        {searchTerm: event.target.value}
      );

      console.log(event.target.value);
    }



  render(){

       const passedEmployees = employeesList.map((emp,i)=>{
          return emp;
       }) 

       const passedStudents = this.state.studentsList.filter(student=>{
          return student.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
       })


//Add loading feature:
if(this.state.studentsList.length === 0){
  return <div className='center-container'><h1>Loading...</h1></div>
}
else{
  return(
      <div className='center-container'>
        <BannerImage />
        <Searchbox onchangeSearch={this.onchangeSearch}/>
        <Scroll>

          <ErrorBoundary>
            <StudentList students={passedStudents}/>
          </ErrorBoundary>
          
        </Scroll>
      </div>
    );
}


    

  }
}

export default App;