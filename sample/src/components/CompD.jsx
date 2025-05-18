import React, {useEffect,useState,useContext} from "react";
import { UserContext } from "./CompA";
export default function CompD(){

    const user = useContext(UserContext);
    return(
        <>
            <h1>Comp D</h1>
            <h2>Bye {user}</h2>
        </>

    )
}