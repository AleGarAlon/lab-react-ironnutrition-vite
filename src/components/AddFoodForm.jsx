import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card, Row, Col, Divider, Input, Button } from "antd";

const AddFoodForm = (foods) => {  
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {name, image,calories,servings, id:uuidv4()}
        
        foods.addFood(newFood)
    }
    return (
        <div>
      <Divider style={{color:"white"}}>Create food</Divider>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <Input name ="name" type = "text"value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          <Input name ="image" type = "text" value={image} onChange={event => setImage(event.target.value)} />
        </label>
        <label>
          <Input name ="calories" type = "number" value={calories} onChange={event => setCalories(event.target.value)} />
        </label>
        <label>
          <Input name ="servings" type = "number" value={servings} onChange={event => setServings(event.target.value)} />
        </label>
       
        
        <Button type='submit' style={{color:"white"}}>Create</Button>
      </form>
    </div>
    )
}

export default AddFoodForm;