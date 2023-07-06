
import React, { useEffect } from 'react';

import Profile from "./component/profile/Profile";
import Video from "./component/video/Video";

import AjImg from './component/userData/img/Ajay-Dhangar.jpg';
import CodeImg from './component/userData/img/img.jpg';

import "./App.css";
import VideoArrayObject from './component/video/VideoArrayObject';


const MyAge = () => {
  const age = 22;
  useEffect(() => {
    console.log('My age is successfully rendered.');
  });

  return <div><h2>My age is {age}.</h2></div>;
};

const name = 'Ajay Dhangar'
function App() {

  let myVideos = [
    {
      id: 1,
      image: AjImg,
      title: 'HTML Mastery',
      channel: 'Ajay Dhangar',
      view: '10M',
      time: '1 year ago',
      verified: true,
    },
    {
      id: 2,
      image: CodeImg,
      title: 'CSS Mastery',
      channel: 'Coding World',
      view: '54M',
      time: '2 year ago',
      verified: false,
    },
    {
      id: 3,
      image: AjImg,
      title: 'JavaScript Mastery',
      channel: 'CodeMastermindHQ',
      view: '25M',
      time: '1 year ago',
      verified: true,
    },
    {
      id: 4,
      image: AjImg,
      title: 'React Mastery',
      channel: 'Ajay Dhangar',
      view: '20M',
      time: '6 Months ago',
      verified: true,
    },
    {
      id: 5,
      image: CodeImg,
      title: 'MongoDB Mastery',
      channel: 'CodeMastermindHQ',
      view: '5M',
      time: '4 Months ago',
      verified: true,
    }
  ]
  
  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <Name />
        <MyAge />
        <Profile />

        <div className="videos">
          <Video title="HTML Mstery" channel="CodeMastermindHQ" view="507K" time="1 month ago" verified={true} />
          <Video title="CSS Mastery" channel="CodeMastermindHQ" view="85907K" time="1 year ago" verified={true} />
          <Video title="MongoDB Mstery" channel="Ajay Dhangar" view="57K" time="1 month ago" verified={false} />
          <Video title="JavaScript Mstery" channel="CodeMastermindHQ" view="1307K" time="1 month ago" verified={true} />
          <Video title="React Mstery" channel="Ajay Dhangar" view="200K" time="1 month ago" verified={false} />
        </div>
        
        <div className='resolve-issue'></div>

        <div className='title-of-video'><h2>All Courses</h2></div>
        {
          myVideos.map(video =><VideoArrayObject className="myAllVideo"
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              view={video.view}
              time={video.time}
              verified={video.verified}
            />
          )
        }

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
