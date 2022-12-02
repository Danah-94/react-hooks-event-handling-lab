// Code Keypad Component Here
import React from "react";

function Keypad (){

    function handleChange(){
        return console.log('Entering password...');
    }

    return (
        <div>
            <input onChange={handleChange} type="password" name="password" placeholder="Enter password ..."/>
        </div>
    )
}

export default Keypad;