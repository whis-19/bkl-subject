import react from 'react';
import { useState, useEffect } from 'react'
export default function Counter(){
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}