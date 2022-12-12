import React from "react";

export default function Event(){
    const developerCLick = () =>{
        alert("Good morning React Developer Kimaiyo")
    };

    return(
        <div className="App">
            <button onClick={developerCLick}>Click Me</button>
        </div>
    );
}