"use client";
//Global style
const h1Style = { color: "red", backgroundColor: "white", padding: 10 };
//Example12:Add Ililne Style in React
export default function UserProfile() {
    return (
        <div>
            <h1 style={h1Style}>User Profile</h1>
            <h1 style={h1Style}>User Profile2</h1>
            <p style={{ color: "blue", fontSize: 20, padding: 10 }}>
                Name:Mg Kaung
            </p>
        </div>
    );

}