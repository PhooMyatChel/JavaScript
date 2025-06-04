"use client";
//Example16:using the logical operator (&&) in rendering
export default function Notification({hasMessage}){
    return(
        <div>
            <h1>Dashboard</h1>
            {hasMessage && <p>You have new Message</p>}
        </div>
    );
}