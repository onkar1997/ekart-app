import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <h2>Redux-Ekart</h2>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link position-relative" aria-current="page" to='/my-cart'>My Cart
                                <span className="position-absolute top-0 start-100 translate-middle p-2 badge rounded-circle bg-danger border border-light">
                                    {cartItems.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar