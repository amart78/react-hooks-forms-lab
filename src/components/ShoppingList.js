import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState ("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){

      if (searchInput === ""){
        return true;
      }

      return item.name.toLowerCase().includes(searchInput);
    }

    return item.category === selectedCategory && item.name.toLowerCase().includes(searchInput);
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
      searchInput = {searchInput} 
      onCategoryChange={handleCategoryChange} 
      onSearchChange= {setSearchInput} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
