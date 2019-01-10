import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description}/>
  });

  return <div className="image-list">{images}</div>
}

export default ImageList;
