import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

function App(border = '1px solid blue') {
  const [persons, setPersons] = useState([
    { id: 'af1', name: 'Max', age: 28 },
    { id: 'af2', name: 'Manu', age: 30 },
    { id: 'af3', name: 'Jessie', age: 41 },
  ]);
  const [showPerson, setShowPerson] = useState(false);
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border,
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    },
  };

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
        {/* <Person name={persons[1].name} click={() => switchNameHandler('test')} /> */}
        {/* <Person name={persons[2].name} change={nameChangeHandler}>My gender: Girl</Person> */}
      </div>
    );
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black',
    // };
  }
  const classes = [];
  if (persons.length <= 2) {
    classes.push('red');
  }
  if (persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is working</p>
      <StyledButton
        key="asd"
        type="button"
        // style={style}
        alt={showPerson}
        onClick={togglePersonsHandler}
      >
        Toggle Name
      </StyledButton>
      <StyledButton
        type="button"
        // style={style}
        alt={showPerson}
        onClick={() => switchNameHandler('xxxxxxx')}
      >
        Switch Name
      </StyledButton>
      {personsPanel}
    </div>
  );
}

export default App;
