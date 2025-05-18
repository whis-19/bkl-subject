import React from "react";
import { useState } from "react";


export default function ArrayUpdater() {
    const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);
    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h1>Array Updater</h1>
            <input type="text" id="foodInput" placeholder="Enter food item" />
            <button onClick={handleAddFood}>Add Food</button>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>
                        {food}{" "}
                        <button onClick={() => handleRemoveFood(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}