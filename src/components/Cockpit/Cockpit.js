import React, { useEffect, useRef, useContext } from 'react';

import PropTypes from 'prop-types';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = ({ showPerson, personsLength, title, toggle }) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (showPerson) {
    btnClass = classes.Red;
  }

  if (personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        type="button"
        ref={toggleBtnRef}
        className={btnClass}
        onClick={toggle}
      >
        Toggle Persons
      </button>
      <button type="button" onClick={authContext.login}>
        Log in
      </button>
    </div>
  );
};

Cockpit.propTypes = {
  showPerson: PropTypes.bool.isRequired,
  personsLength: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default React.memo(Cockpit);
