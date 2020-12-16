import './App.css';
import Person from './Person/Person'
import React, {useState} from 'react';

function App() {
  const [persons, setPersons] = useState([
    {name: 'Max', age: 28},
    {name: 'Manu', age: 30},
    {name: 'Jessie', age: 41},
  ]);
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name={persons[0].name}/>
      <Person name={persons[1].age}>My gender: Girl</Person>
      <Person name='Ronnie'/>
    </div>
  );
}

export default App;
