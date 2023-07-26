import { useState } from "react";

function SearchBar({searchFood}) {
  const [searchFoodName, setSearchFoodName] = useState("");

  const handleInput = (event) => {
    const foodName = event.target.value;
    setSearchFoodName(foodName);
    searchFood(foodName);
  
};

  
  /*const handleSubmit = (event) => {
    event.preventDefault();

    searchFood(searchFoodName)
    };*/

  return (
    <form>
      <label>Search</label>
      <input type="text" value={searchFoodName} onChange={handleInput} />
      
    </form>
  )
}

export default SearchBar;