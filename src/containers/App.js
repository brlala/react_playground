// import './App.module.css';
import { useState } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

function App() {
  const [persons, setPersons] = useState([
    { id: 'af1', name: 'Max', age: 28 },
    { id: 'af2', name: 'Manu', age: 30 },
    { id: 'af3', name: 'Jessie', age: 41 },
  ]);
  const [showPerson, setShowPerson] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

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
    console.log('toggled to ', showPerson);
  };

  const toggleLoginHandler = () => {
    setAuthenticated(!authenticated);
  };

  let personsPanel;
  if (showPerson) {
    personsPanel = (
      <div>
        <Persons
          pList={persons}
          clicked={deletePersonHandler}
          changed={nameChangeHandler}
        />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <AuthContext.Provider
        value={{
          authenticated,
          login: toggleLoginHandler,
        }}
      >
        <Cockpit
          persons={persons}
          title="My React App"
          toggle={togglePersonsHandler}
          click={switchNameHandler}
          showPerson={showPerson}
          personsLength={persons.length}
        />
        {personsPanel}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
