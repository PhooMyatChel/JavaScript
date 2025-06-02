"use client";
import React from "react";
export default  class Person extends React.Component{
    constructor (props){
        super(props);
        this.state={
            name:"Mg Kyaw MIn",
            email:"mkm@gmail.com",
            phoneNo:"091234567",
        };
        this.onChangePhoneNo=this.onChangePhoneNo.bind(this);
    }
    onChangeEmail(changedEmail){
        this.setState({email:changedEmail});
    }
    onChangePhoneNo(onChangePhoneNo){
        this.setState({phoneNo:event.target.value});
    }
    onClickButton(){
        alert("Button 1 clicked!");
    }
    onClickButton2(){
        alert ("Button 2 clicked!");
    }
    render(){
        return(
            <div>
                <h1>Event in Class Component</h1>
                <input
                value={this.state.value}
                placeholder="Enter Name"
                onChange={(event)=>{
                    this.setState({name:event.target.value})
                }}
                />
                <input
                value={this.state.email}
                placeholder="enter email"
                onChange={(event)=>this.onChangeEmail(email.target.value)}
                />
                <input
                value={this.state.phoneNo}
                placeholder="Enter Phone No."
                onChange={this.onChangePhoneNo}
                />
                <button onClick={this.onClickButton}>Button 1</button>
                <button onClick={()=> this.onClickButton2()}>Button 2</button>
            </div>
        );
    }
}