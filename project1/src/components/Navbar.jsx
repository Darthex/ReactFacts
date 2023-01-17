import React from "react"
import Img from "../images/react-logo.png"

export default function Navbar() {
    return(
        <nav className="nav">
            <img src={Img}/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}