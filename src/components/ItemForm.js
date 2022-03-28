import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameAdd(event){
    setName(event.target.value);
  }

  function handleCategorySelect(event){
    setCategory(event.target.value);
  }

  function handleItemAdd(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleItemAdd}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value = {name} 
        onChange={handleNameAdd}
        />
      </label>

      <label>
        Category:
        <select 
        name="category" 
        value= {category} 
        onChange={handleCategorySelect}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit"> Add to List</button>
    </form>
  );
}

export default ItemForm;
