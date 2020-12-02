import React, { Component } from 'react'
import CartIcon from './CartIcon.js'
import { Link } from 'react-router-dom'
import './estilos.css'

class Navbar extends Component {
    render() {
        return (
            <nav id='navbar' className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand nav-item" to='/'><svg width="2em" height="3em" viewBox="0 0 16 16" className="bi bi-music-note-list" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                    <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                    <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                </svg></Link>   
                <span id='nav-text' className="navbar-text">
                    Music is the answer...♥
                </span>
                <span id='navbar'>
                    asd
                </span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li id='nav-text' className="nav-item active">
                            <Link to='/category/ofertas'>Ofertas <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
                <CartIcon />
            </nav>
        )
    }
}

export default Navbar