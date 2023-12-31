import { useState } from 'react';
import { sculptureList } from '../../data/data';
import './Gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function handlePreviewClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <section className='about section'>

      <h2>My Web Features</h2>
      <div className="content">
        <ul className='items-container'>
          <li className='items'><Link to={'/Translate'}>Language Translater</Link></li>
          <li className='items'><Link to={'/Profile'}>Profile</Link></li>
          <li className='items'><Link to={'/Gallery'}>Gallery</Link></li>
          <li className='items'><Link to={'/Interview'}>Interview</Link></li>
        </ul>
      </div>

      <br />

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div className="my-gallery-container">
        <div className="clickable-content">
          <button className='btn showBtn' onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
          </button>
        </div>
        <div className="show-content">
          {showMore && <p className='my-text-content'>{sculpture.description}</p>}
        </div>
        <div className="image-content">
          <img className='my-content-img'
            src={sculpture.url}
            alt={sculpture.alt}
          />
        </div>
      </div>
      <div className="clicked-buttons">
        <div className="preview">
          <button className='btn preBtn' onClick={handlePreviewClick} style={(index + 1 === (sculptureList.length - (sculptureList.length - 1))) ? { backgroundColor: 'red', color: '#fff' } : {}}>
            {(index + 1 === (sculptureList.length - (sculptureList.length - 1))) ? "Don't Click" : 'Preview'}

          </button>
        </div>
        <div className="next">
          <button className='btn nextBtn' onClick={handleNextClick} style={(index + 1 === sculptureList.length) ? { backgroundColor: 'red', color: '#fff' } : {}}>
            {(index + 1 === sculptureList.length) ? "Don't Click" : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
}
