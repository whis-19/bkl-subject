import React, {useState,useEffect,useRef} from "react";

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setTime] = useState(0);
    const intervalRef = useRef(null);
    const startTime = useRef(0);

    useEffect(()=>{
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime.current);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);

    },[isRunning])

    function start(){
        if (!isRunning) {
            setIsRunning(true);
            startTime.current = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime.current);
            }, 10);
        } else {
            setIsRunning(false);
            clearInterval(intervalRef.current);
        }

    }
    function end(){
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setTime(0);
        startTime.current = 0;
    }
    function reset(){
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setTime(0);
        startTime.current = 0;
        
    }
    function formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    }

    return (
        <div>
            <h1>Stop Watch</h1>
            <h2>{formatTime(elapsedTime)}</h2>
            <button onClick={start}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={end}>End</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}