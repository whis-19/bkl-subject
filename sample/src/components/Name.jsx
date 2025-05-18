import React,{useState} from 'react';
export default function Name(props){
    const [name,setName] = useState();
    const click = () => {
        setName(props.name);
    }
    
    
    return(
        <>
            <p>Name: {name}</p>
            <button onClick={() => click()}>Update</button>
        </>
    )
}