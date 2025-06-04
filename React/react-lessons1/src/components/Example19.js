"use client";
//Example19 :short-circuiting with||(fallback rendering)
export default function Username({name}){
    return(
        //If name is null or undefined,"Guest" will be displayed.
        <p>Helllo,{name||"Guest"}!</p>
    );
}