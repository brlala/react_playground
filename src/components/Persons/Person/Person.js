import { useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

const person = ({ changed, name, click, age, children }) => {
  const inputElementRef = useRef(null);
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p key="i2">{children}</p>
      <input
        key="i3"
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={inputElementRef}
        type="text"
        onChange={changed}
        value={name}
      />
    </>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(person, classes.Person);
