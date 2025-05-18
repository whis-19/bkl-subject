import React,{useEffect,useState} from "react";

export default function DigitalClock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [date,setDate] = useState(new Date().toLocaleDateString());

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString());
        }, 1000);

        return () => clearInterval(interval);
    },[]);


    return(
        <>
            <h1>Digital Clock</h1>
            <h2>{time}</h2>
            <h3>{date}</h3>
        </>
    )
}