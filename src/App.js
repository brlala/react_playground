import './App.css';
import { useState } from 'react';
import Person from './Person/Person';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 30 },
    { name: 'Jessie', age: 41 },
  ]);
  const [showPerson, setShowPerson] = useState(false);
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const switchNameHandler = (newName) => {
    console.log('was clicked');
    setPersons([
      { name: newName, age: 2 },
      { name: 'ManU', age: 3 },
      { name: 'JessiE', age: 4 },
    ]);
  };

  const nameChangeHandler = (event) => {
    console.log('was clicked');
    setPersons([
      { name: 'Max', age: 2 },
      { name: event.target.value, age: 3 },
      { name: 'JessiE', age: 4 },
    ]);
  };

  const togglePersonsHandler = () => {
    setShowPerson(!showPerson);
  };

  let personsPanel;
  if (showPerson) {
    personsPanel = (
      <div>
        {persons.map((person) => <Person name={person.name} />)}
        <Person name={persons[0].name} click={() => switchNameHandler('test')} />
        <Person name={persons[1].name} change={nameChangeHandler}>My gender: Girl</Person>
        <Person name="Ronnie" />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button
        type="button"
        style={style}
        onClick={togglePersonsHandler}
      >
        Toggle Name
      </button>
      <button
        type="button"
        style={style}
        onClick={() => switchNameHandler('xxxxxxx')}
      >
        Switch Name
      </button>
      {personsPanel}
    </div>
  );
}

export default App;
