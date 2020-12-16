import './App.css';
import Person from './Person/Person'
import React, {useState} from 'react';

function App() {
  const [persons, setPersons] = useState([
    {name: 'Max', age: 28},
    {name: 'Manu', age: 30},
    {name: 'Jessie', age: 41},
  ]);

  const switchNameHandler = (newName) => {
    console.log('was clicked')
    setPersons([
      {name: newName, age: 2},
      {name: 'ManU', age: 3},
      {name: 'JessiE', age: 4},
    ])
  }

  const nameChangeHandler = (event) => {
    console.log('was clicked')
    setPersons([
      {name: event.target.value, age: 2},
      {name: "Manu", age: 3},
      {name: 'JessiE', age: 4},
    ])
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={() => switchNameHandler('xxxxxxx')}>Switch Name</button>
      <Person name={persons[0].name}/>
      <Person name={persons[1].name} click={switchNameHandler} change={nameChangeHandler}>My gender: Girl</Person>
      <Person name='Ronnie'/>
    </div>
  );
}

export default App;
