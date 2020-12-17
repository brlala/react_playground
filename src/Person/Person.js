import './Person.css';

const person = (props) => (
  <div className="Person">
    <p onClick={props.click}>
      I'm a person called
      {props.name}
      !
    </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} />
  </div>
);

export default person;
