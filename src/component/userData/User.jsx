import React from 'react';
import './User.css';


function User(props) { 

  return (
    <div>
      <div>
        <img
          src={props.img}
          alt="Ajay Dhangar"
          className={`my-img`}
        />
        <br />
        <p className="my-text">
          My name is {props.name}, my age is {props.age} and my job is <q>{props.title}</q>
        </p>
      </div>
    </div>
  );
}

export default User;
