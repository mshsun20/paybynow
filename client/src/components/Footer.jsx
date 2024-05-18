import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="wbpg">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Home</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Features</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Pricing</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">FAQs</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">About</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Home</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Features</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Pricing</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">FAQs</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">About</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Home</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Features</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Pricing</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">FAQs</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">About</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><NavLink className="link-body-emphasis" to="#">twitter</NavLink></li>
                            <li className="ms-3"><NavLink className="link-body-emphasis" to="#">instagram</NavLink></li>
                            <li className="ms-3"><NavLink className="link-body-emphasis" to="#">facebook</NavLink></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}

export default Footer