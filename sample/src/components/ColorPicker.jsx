import React from "react";
import { useState } from "react";

export default function ColorPicker() {

    const [color, setcolor] = useState("#FFFFFF");

    function handleChnage(e){
        setcolor(e.target.value);
    }

    return(
        <>
            <h1>Color Picker</h1>
            <p>Selected Color: {color}</p>

            <label>Select a color</label>
            <input type="color" value={color} onChange={handleChnage} />

        </>
    )
}