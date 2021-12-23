import React, { useState } from "react";
//Hooks in React using useState
const Component = () => {
    const state  = useState();
    //console.log(state);
    //count - currunt data, setCount(function) - updated data, useState(0) - initial data 
    const [count, setCount] = useState(0);
    
    const IncNum = () =>{
        setCount(count + 5);
        //console.log('clicked' + count++);
};
     return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}>Click Me</button>
        </>
     );
}

export default Component; 