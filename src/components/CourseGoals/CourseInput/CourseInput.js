import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
//This is Dynamic Styling changes have been made in css file ie. invalid input, invalid label
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

//Below is the InLine Styling alternative 
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
  //       <input style={{
  //         borderColor: !isValid ? 'red' : 'black',
  //         background: !isValid ? 'salmon' : 'transparent'
  //         }}
  //         type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
//};

export default CourseInput;