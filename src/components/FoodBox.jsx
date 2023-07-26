import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ foods, deleteFood }) {
  return (
    <Col>
      <Card title= {foods.name} style= {{width: 230, height: 300, margin: 10}}>
      <img src={foods.image}  height= {60} alt={foods.name} />
      <p>Calories: {foods.calories}</p>
      <p>Servings: {foods.servings}</p>
      <p>
        <b>Total Calories: {foods.servings * foods.calories} kcal</b>
      </p>
      <Button onClick={() => deleteFood(foods.id)} style ={{backgroundColor: "#2B8DE7" , color:"white"}}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;  