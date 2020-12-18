import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      click={() => props.clicked(index)}
      change={(event) => props.changed(event, person.id)}
    />
  ));

export default persons;
