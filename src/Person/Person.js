import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    // <div className="Person" style={style}>
    <div>
      <p onClick={props.click}>I'm a person called {props.name}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
