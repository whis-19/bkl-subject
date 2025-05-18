import React, {useEffect,useState,createContext} from "react";
import CompB from "./CompB";
export const UserContext = createContext();
export default function CompA(){

    const [user,setUser] = useState("WHIS")
    return(
    <>
        <h1>Comp A</h1>
        <h2>Hello {user}</h2>
        <UserContext.Provider value={user}>
            <CompB user={"NIGGA"}/>
        </UserContext.Provider>
        {/* <CompB user={user}/> */}
    </>
    )
}