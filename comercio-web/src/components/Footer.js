import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './estilos.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <nav id='navbar' className="navbar navbar-expand-lg navbar-light ">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li id='nav-text' className="nav-item ">
                        <Link to='/contact'>Contacto</Link>
                        </li>
                        <span id='navbar'>
                            asd
                        </span>
                        <li id='nav-text' className="nav-item">
                            <Link to='/about'>Sobre nosotros</Link>
                        </li>
                    </ul>
                    <span id='nav-text' className="navbar-text">
                        ® Agustín Acosta
                    </span>
                </div>
            </nav>
            </div>
        )
    }
}

export default Footer