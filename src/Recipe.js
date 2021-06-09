import React from 'react';

const Recipe = ({titles, calories, image, ingredients}) => {
  return(
    <div>
      <h2>{titles}</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default Recipe;