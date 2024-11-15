import React from 'react'
import reactlogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={reactlogo} alt='React logo' className="nav--icon"/>
            <h3 className="nav-logo">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}