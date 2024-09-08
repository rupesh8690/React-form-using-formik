import { useEffect, useState } from "react";

export default function Counter(){
    let  [countx, setCountx] = useState(0);
    let  [county, setCounty] = useState(0);

    let incCountx= (currCount) =>{
        setCountx(countx+1)
    }
    
    let incCounty= (currCount) =>{
        setCounty(county+1)
    }

    useEffect(function sideEffect(){
        console.log("this is the side effect");

    },
    [countx]
);
    return(

        <div>
        <h1> Countx= {countx}</h1>
        <button onClick={incCountx}>+1</button>
        <hr />

        <h1>county= {county}</h1>
        <button onClick={incCounty}>+1</button>

        </div>
    )

   
}