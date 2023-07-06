import "./App.css";

import React, { useEffect } from 'react';

import Profile from "./component/profile/Profile";

const MyAge = () => {
  const age = 22;
  useEffect(() => {
    console.log('My age is successfully rendered.');
  });

  return <div><h2>My age is {age}.</h2></div>;
};


const name = 'Ajay Dhangar'
function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <Name />
        <MyAge />
        <Profile />
      </div>
    </>
  );
}

function Name() {
  const nameColor = "name-color";
  return (
    <>
      <div className="App">
        <h2>My name is <spen className={nameColor}> {name}</spen>.</h2>
      </div>
    </>
  );
}

export default App;
