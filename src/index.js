import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here

  return (
    <button onClick={props.handleOnClick}>{props.text}</button>
  )
};

const Application = () => {
  const [name, setName] = useState('')
  // your code here
  const handleOnChange = (e) => {
    setName(e.target.value);
  }
  const reset = (e) => {
    setName(e.target.value = '')
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input type="text" name="name" placeholder='TYPE YOUR NAME' setName={setName} value={name} onChange={handleOnChange} />
      <Button text='RESET' handleOnClick={reset} />
      {name.length > 0 && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
