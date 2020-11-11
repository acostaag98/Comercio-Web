import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './estilos.css'

class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li id='nav-text' className="nav-item ">
                        <Link to='/contact'><a className="nav-link">Contacto</a></Link>
                        </li>
                        <li id='nav-text' className="nav-item">
                            <Link to='/about'><a className="nav-link" >Sobre nosotros</a></Link>
                        </li>
                    </ul>
                    <span id='nav-text' className="navbar-text">
                        ® Agustín Acosta
                    </span>
                </div>
            </nav>
        )
    }
}

export default Footer