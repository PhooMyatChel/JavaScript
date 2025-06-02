"use client";
import React,{useState} from "react";
export default function Parent(){
    const[name,setName]=useState("Ma Sandi");
    const[date,setDate]=useState(new Date());
    return(
        <div>
            <h1>She is my cousin.</h1>
            <div>{name}</div>
            <div>{date.toString()}</div>
        </div>
    );
}