import React from "react";

function FoodBox({ foods, deleteFood }) {
  return (
    <div>
      <p>{foods.name}</p>
      <img src={foods.image} style={{ height: "100px" }} alt={foods.name} />
      <p>Calories: {foods.calories}</p>
      <p>Servings: {foods.servings}</p>
      <p>
        <b>Total Calories: {foods.servings * foods.calories} kcal</b>
      </p>
      <button onClick={() => deleteFood(foods.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;  