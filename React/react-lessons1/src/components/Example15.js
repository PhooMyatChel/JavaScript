"use client";
//Example15 :using the ternary operator(?:)in rendering
export default function Greeting({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}