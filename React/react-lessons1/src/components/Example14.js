"use client";
//Example14:using if statement in rendering
export default function Greeting({isLoggedIn}){
    if(isLoggedIn)
        return<h1>Welcome back!</h1>;
    if(!isLoggedIn)
        return<h1>Please log in.</h1>;
}