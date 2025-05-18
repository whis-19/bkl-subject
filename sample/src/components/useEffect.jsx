import React from "react";

import { useState,useEffect } from "react";

export default function useEffect__(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        }  

    },[]);

    useEffect(() => {
        document.title = `Width: ${width}px, Height: ${height}px`;
    }, [width, height]);


    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }



    return(
        <>
            <h1>Window Size</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    )
}