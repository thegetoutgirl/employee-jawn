import React from 'react'
import './Header.css'
import './jawn.png'
import '../../lumen-bootstrap.css'

export default function Header() {

    return (
<header className="header grad">
        
        <h1>Employee<img src={require("./jawn.png")} alt="jawn" className="jawn"/></h1>

        <h5>I already had an employee-directory repo, so jawn it is</h5>
</header>
    )
}


// Re: gradient: no idea why this doesn't work. it's worked before with a bootswatch. Not even the !important works.