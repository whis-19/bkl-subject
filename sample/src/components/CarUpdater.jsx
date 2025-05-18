import React, { use } from "react";
import { useState } from "react";

export default function CarUpdater(){
    const [car, setCar] = useState({
        year: 2020,
        make: "Honda",
        model: "Civic"
    });
    function handleMake(e){
        setCar({...car, make: e.target.value});
    }
    function handleYear(e){
        setCar({...car, year: e.target.value});
    }
    function handleModel(e){
        setCar({...car, model: e.target.value});
    }
    return (
        <>
        <input type="text" value={car.make} onChange={handleMake} />
        <input type="text" value={car.model} onChange={handleModel} />    
        <input type="number" value={car.year} onChange={handleYear} />
        
            <p>Your car is: {car.make} {car.model} {car.year}</p>

        </>
    )
}