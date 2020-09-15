import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
    return ( 
        <header style = {styleHeader}>
            <h1>Todolist</h1>
            <Link style = {styleLink} to = "/">Home</Link> | <Link style = {styleLink} to = "/about">About</Link>
        </header>
    )


}


const styleLink = {
    textDecoration : 'none',
    fontWeight : 'bold',
    padding: '5px 5px'
}


const styleHeader = {

    backgroundColor: 'magenta',
    textAlign: 'center',
    padding : '5px 5px'
}
