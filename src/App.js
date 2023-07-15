
import React from 'react'; // , { useEffect }

import { Profile, Video, VideoArrayObject, Gallery } from "./component";
// import { HandlingEvents } from "./basic-learning-concepts";

import Translate from "./component/translater/Translate";

import AjImg from './images/thumb/thunb.png';
import CodeImg from './images/thumb/thunb.png';

import "./App.css";

// const MyAge = () => {
//   const age = 22;
//   useEffect(() => {
//     console.log('My age is successfully rendered.');
//   });

//   return <div><h2>My age is {age}.</h2></div>;
// };

// const name = 'Ajay Dhangar'
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
    },
    {
      id: 6,
      image: CodeImg,
      title: 'Git & GitHub Mastery',
      channel: 'CodeMastermindHQ',
      view: '6M',
      time: '8 Months ago',
      verified: true,
    },
    {
      id: 7,
      image: CodeImg,
      title: 'DSA Mastery',
      channel: 'Ajay Dhangar',
      view: '50M',
      time: '1 year ago',
      verified: true,
    },
    {
      id: 8,
      image: CodeImg,
      title: 'Node Mastery',
      channel: 'CodeMastermindHQ',
      view: '2M',
      time: '5 Months ago',
      verified: true,
    },
    {
      id: 9,
      image: CodeImg,
      title: 'Express Mastery',
      channel: 'Ajay Dhangar',
      view: '1.3M',
      time: '3 Months ago',
      verified: true,
    },
    {
      id: 10,
      image: CodeImg,
      title: 'Java Mastery',
      channel: 'Ajay Dhangar',
      view: '11.3M',
      time: '8 Months ago',
      verified: false,
    }
  ]

  return (
    <>
      <div className="App">
        {/* 
        <div className='my-navbar'>
          <Navbar />
        </div> */}

        <h1>Hello Everyone! Well Come to my Site.</h1>
        {/* <h1>Hello World!</h1> */}
        {/* <Name /> */}
        {/* <MyAge /> */}

        <div className='main-profile'>
          <Profile />
        </div>
        <div className='gallery'>
          <Gallery />
        </div>
        <div className='title-of-video'><h2>Top Courses</h2></div>

        <div className="videos">
          <Video title="HTML Mstery" channel="CodeMastermindHQ" view="507K" time="1 month ago" verified={true} />
          <Video title="CSS Mastery" channel="CodeMastermindHQ" view="85907K" time="1 year ago" verified={true} />
          <Video title="MongoDB Mstery" channel="Ajay Dhangar" view="57K" time="1 month ago" verified={false} />
          <Video title="JavaScript Mstery" channel="CodeMastermindHQ" view="1307K" time="1 month ago" verified={true} />
          <Video title="React Mstery" channel="Ajay Dhangar" view="200K" time="1 month ago" verified={false} />
        </div>

        <div className='resolve-issue'></div>

        <div className='title-of-video'><h2>All Courses</h2></div>
        <div className="myAllCourses">
          {
            myVideos.map(video => <VideoArrayObject className="myAllVideo"
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
        <div className="translate">
          <Translate />
        </div>

        <div className='basic-concepts'>
          <hr />
          <h3 style={{ textAlign: 'center' }}>Learn Basic Concepts</h3>
          <hr />
          {/* <div>
            <HandlingEvents />
          </div> */}
        </div>


      </div>
    </>
  );
}

// function Name() {
//   const nameColor = "name-color";
//   return (
//     <>
//       <div className="App">
//         <h2>My name is <spen className={nameColor}> {name}</spen>.</h2>
//       </div>
//     </>
//   );
// }

export default App;
