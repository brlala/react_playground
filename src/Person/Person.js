const person = (props) => {
  return (
    <div>
      <p>I'm a person called {props.name}!</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;
