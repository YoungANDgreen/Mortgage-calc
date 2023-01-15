import React, { useState } from 'react';
// import './style.css';




function Form() {


  // Here we set two state variables for firstName and lastName using `useState`
  const [Principal, setPrincipal] = useState('');
  const [Interest, setInterest] = useState('');
  const [Term, setTerm] = useState('');
  const [Down, setDown] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'Principal' ? setPrincipal(value) : setInterest(value);

    if (name === 'Principal') {
        setPrincipal(value);
    } else if (name === 'Interest'){
        setInterest(value);
    } else if (name === 'Term'){
        setTerm(value);
    }  else {
        setDown(value);
    }
  };

  const payment = () => {
    const p = Principal;
    const d = Down;
    const i = Interest/100;
    const n = Term / 12;  
    const m = ((p - d) * ((i* Math.pow((1 + i),  n)) / (Math.pow(1 + i),  n - 1)));
    console.log(m)
    return m;;
    };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // e.preventDefault();


    // Alert the user their first and last name, clear the inputs
    alert(`Monthly Payment Calculated`);
    // setPrincipal('');
    // setInterest('');
    // console.log(m);
  };


  return (
    <div>
      <form className="form">
        <input
          value={Principal}
          name="Principal"
          onChange={handleInputChange}
          type="number"
          placeholder="Principal"
        />   
        <input
        value={Down}
        name="Down"
        onChange={handleInputChange}
        type="number"
        placeholder="Down Payment"
        />
        <input
          value={Interest}
          name="Interest"
          onChange={handleInputChange}
          type="number"
          placeholder="Interest rate"
        />
        <input
          value={Term}
          name="Term"
          onChange={handleInputChange}
          type="number"
          placeholder="Loan Term (Years)"
        />
        <button type="button" onClick={() => {
            handleFormSubmit();
            payment();
        }}>
          Submit
        </button>
      </form>
      {/* <p id='payment'>
        Monthly Payment: {m}
      </p> */}
    </div>
  );
}

export default Form;

