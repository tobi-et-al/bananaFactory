import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person  from './Person/Person.js';

class App extends Component {
	state = {
		persons: [
			{ name: "Offset", age: '22' },
			{ name: "Takeoff", age: '22' },
			{ name: "Quavo", age: '22'}
		]
	}

	switchNameHandler = (newName) => {
		this.setState ({
			persons: [
				{ name: "YRN Offset"  , age: '22 milli' },
				{ name: "YRN Takeoff", age: '22 milli' },
				{ name: "YRN Quavo", age: '22 milli' }
			]
		})
		console.log("skrt skrt")
	}
	
	nameChangeHandler = (event) => {
		console.log(event.target.value);
		  this.setState({
			persons: [
				{ name: event.target.value, age: '22 milli' },
				{ name: "YRN Takeoff", age: '22 milli' },
				{ name: "YRN Quavo", age: '22 milli' }
			]
		})  
	}

    render() {
        return (
              <div className="App">
				<h1>React App Migos</h1>
				<button onClick={this.switchNameHandler} >switch!</button>
				<Person  
						name={this.state.persons[0].name} 
						age={this.state.persons[0].age}
						changed={this.nameChangeHandler}>Migos Offset</Person>
				<Person  
						name={this.state.persons[1].name} 
						age={this.state.persons[1].age} 
						changed={this.nameChangeHandler} >Migos Offset</Person>
				<Person  
						name={this.state.persons[2].name} 
						changed={this.nameChangeHandler}
						age={this.state.persons[2].age}>Migos Offset</Person> 
              </div>
        ); 
 

    }
}

export default App;