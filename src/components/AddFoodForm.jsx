import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
      <h2>Create food</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input name ="name" type = "text"value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          <input name ="image" type = "text" value={image} onChange={event => setImage(event.target.value)} />
        </label>
        <label>
          <input name ="calories" type = "number" value={calories} onChange={event => setCalories(event.target.value)} />
        </label>
        <label>
          <input name ="servings" type = "number" value={servings} onChange={event => setServings(event.target.value)} />
        </label>
       
        
        <button type='submit'>Create</button>
      </form>
    </div>
    )
}

export default AddFoodForm;