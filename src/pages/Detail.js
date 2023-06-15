import React from 'react'
import { useLocation } from 'react-router'

const Detail = () => {
  const { state } = useLocation();
  const tags = state.strTags.split(",");

  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= Object.keys(state).length; i++) {
    let ingridentKey = `strIngredient${i}`;
    let measureKey = `strMeasure${i}`;

    if (state[ingridentKey] && state[measureKey]) {
      ingredients.push(state[ingridentKey]);
      measures.push(state[measureKey]);

    } else {
      break;
    }
  }



  return (
    <div>
      <div className='flex gap-60'>
        <div className='h-[350px] w-[400px] mt-5 p-5'>
          <h1 className='text-[20px] mb-5'>{state.strMeal}</h1>
          <img className='h-[250px] mb-1' src={state.strMealThumb} alt="" />
          <h1>{tags[0]} {tags[1]}</h1>
        </div>

        <div className='flex gap-40 mt-24'>
          <div>
            <h1>Ingridents:</h1>
            {ingredients.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
          <div>
            <h1>Measure</h1>
            {measures.map((measure, index) => {
              return <p key={index}>{measure}</p>
            })}
          </div>
        </div>

      </div>

      <div className='p-5 mt-5'>
        <h1 className='text-[20px] mb-2'>Instructions:</h1>
        <p className='text-justify'>{state.strInstructions}</p>
      </div>

    </div>
  )
}

export default Detail
