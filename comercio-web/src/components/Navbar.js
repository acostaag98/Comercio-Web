import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">A-A Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Catálogo<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li classNames="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <button className='btn btn-success'>
                        <i className="fas fa-shopping-cart">Cart</i>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navbar