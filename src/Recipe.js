import React from 'react';

const Recipe = ({titles, calories, image}) => {
  return(
    <div>
      <h2>{titles}</h2>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default Recipe;