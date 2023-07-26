import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import SearchBar from "../components/SearchBar";

function FoodList () {
    const [foods, setFoods] = useState(foodsJson);
    const [cloneFoods, setConeFoods] = useState(foods);
    const addNewFood = (newFood) => {
      const updatedFood = [...foods,newFood];
      setFoods(updatedFood);
    }
    const deleteFood = (id) => {
      setFoods(prevFoods => {
        return prevFoods.filter(foods => foods.id !== id)
      })
    }
    const foodByName = (searchFood) => {
        setFoods((prevFoods) => {
          if (!searchFood) {
            return cloneFoods;
          }
          else {
            return prevFoods.filter((food) => food.name.toUpperCase().includes(searchFood.toUpperCase()));
          }
        });
      };
    return (
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
            <AddFoodForm  addFood={addNewFood}/>  
            <SearchBar   searchFood={foodByName}/> 
        <div style = {{display:"flex", flexWrap:"wrap"}}>
           
         {foods.map(oneFood =>{
          if (foods.length === 0){
            return <p>No food to show</p>
          }
          else {return(
            <div key={oneFood.id}>
            <FoodBox foods = {oneFood} deleteFood ={deleteFood}/>
            </div>
          )}
        })}
        </div>
      </div>
    );  
}

export default FoodList;