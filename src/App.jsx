import React from "react"; // "react" - из папки node_modules

const Caption = () => {
    return <div>
        <h2>My First React App</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, facilis!</h3>
    </div>
}

const Card = () => {
    let now = new Date().toLocaleDateString();
    return <div>{now}</div>
}

export {Caption, Card};