import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  
  const addNewFood = (newFood) => {
    const updatedFood = [...foods,newFood];
    setFoods(updatedFood);
  }

  const deleteFood = (id) => {
    setFoods(prevFoods => {
      return prevFoods.filter(foods => foods.id !== id)
    })
  }


  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
         <AddFoodForm  addFood={addNewFood}/>     
       {foods.map(oneFood =>{
        return(
          <div key={oneFood.id}>
          <FoodBox foods = {oneFood} deleteFood ={deleteFood}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
