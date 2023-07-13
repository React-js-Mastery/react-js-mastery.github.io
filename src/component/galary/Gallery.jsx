import { useState } from 'react';
import { sculptureList } from '../../data/data';
import './Gallery.css';

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
    <section className='my-gallery'>
      <div className="clicked-buttons">
        <div className="preview">
          <button className='btn preBtn' onClick={handlePreviewClick}>
            Preview
          </button>
        </div>
        <div className="next">
          <button className='btn nextBtn' onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
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
    </section>
  );
}
