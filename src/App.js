// import './App.module.css';
import { useState } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

function App() {
  const [persons, setPersons] = useState([
    { id: 'af1', name: 'Max', age: 28 },
    { id: 'af2', name: 'Manu', age: 30 },
    { id: 'af3', name: 'Jessie', age: 41 },
  ]);
  const [showPerson, setShowPerson] = useState(false);

  const switchNameHandler = (newName) => {
    console.log('was clicked');
    setPersons([
      { id: 'af1', name: newName, age: 2 },
      { id: 'af2', name: 'ManU', age: 3 },
      { id: 'af3', name: 'JessiE', age: 4 },
    ]);
  };

  const deletePersonHandler = (index) => {
    console.log('delete person');
    // copy the state first to make it an immutable state
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => p.id === id);
    const person = { ...persons[personIndex] };
    person.name = event.target.value;
    const newPersons = [...persons];
    newPersons[personIndex] = person;
    setPersons(newPersons);
  };

  const togglePersonsHandler = () => {
    setShowPerson(!showPerson);
  };

  let personsPanel;
  let btnClass = '';
  if (showPerson) {
    personsPanel = (
      <div>
        {persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            click={() => deletePersonHandler(index)}
            change={(event) => nameChangeHandler(event, person.id)}
          />
        ))}
      </div>
    );

    btnClass = styles.Red;
  }
  const assignedClasses = [];
  if (persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }
  return (
    <div className={styles.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button
        key="asd"
        type="button"
        // style={style}
        onClick={togglePersonsHandler}
        className={btnClass}
      >
        Toggle Name
      </button>
      <button
        type="button"
        // style={style}
        onClick={() => switchNameHandler('xxxxxxx')}
        className={btnClass}
      >
        Switch Name
      </button>
      {personsPanel}
    </div>
  );
}

export default App;
