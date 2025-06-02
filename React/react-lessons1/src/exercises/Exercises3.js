"use client";
import React from "react";
export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ma Yati",
            date:new Date(),
        };

    }render(){
    return(
    <div>
    <h1>This is my sister.</h1>
    <div>{this.state.name}</div>
    <div>{this.state.date.toString()}</div>
    </div>
    );
}
}