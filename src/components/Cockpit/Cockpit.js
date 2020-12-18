import styles from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPerson) {
    console.log(styles);
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button
        key="asd"
        type="button"
        // style={style}
        onClick={props.toggle}
        className={btnClass}
      >
        Toggle Name
      </button>
      <button
        type="button"
        // style={style}
        onClick={() => props.click('xxxxxxx')}
        className={btnClass}
      >
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
