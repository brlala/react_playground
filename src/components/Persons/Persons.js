import Person from './Person/Person';

const persons = ({ clicked, changed, pList }) =>
  pList.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      click={() => clicked(index)}
      changed={(event) => changed(event, person.id)}
    />
  ));

export default persons;
