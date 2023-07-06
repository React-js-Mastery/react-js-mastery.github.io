import React from 'react';
import './Ajay.css';
import img from './img/Ajay-Dhangar.jpg';

function Ajay(props) { 

  const myInfo = {
    name: 'Ajay Dhangar',
    age: 22,
  };

  return (
    <div>
      <div>
        <img
          src={img}
          alt="Ajay Dhangar"
          className={`my-img`}
        />
        <br />
        <p className="my-text">
          My name is {myInfo.name}, my age is {myInfo.age} and my job is <q>{props.title}</q>
        </p>
      </div>
    </div>
  );
}

export default Ajay;
