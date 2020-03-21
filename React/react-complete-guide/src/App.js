import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Julio", age: 27},
      { name: "Isela", age: 24},
      { name: "Manuel", age: 28},
    ],
  }

  switchNameHandler = (newName) => {
    console.log("The button was clicked")
    this.setState({
      persons: [
        { name: "", age: 27},
        { name: "Alexa", age: 24},
        { name: "Ricardo", age: 28},
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27},
        { name: "Alexa", age: 24},
        { name: "Ricardo", age: 28},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React Component</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler}
        >
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Cesar')}
          changed={this.nameChangeHandler}
        >
            My hobbies: Play Guitar
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={()=> this.switchNameHandler("Ricardo")}
        />
      </div>
    );
  }
}

export default App;
