import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark p-2">
                    <div className="container">
                        <a href="#" className="navbar-brand">IPhone</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                data-target="#navbarContent"
                                aria-controls="navbarContent" aria-expanded="false">
                    <span className="navbar-toggler-icon">

                    </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About me</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-outline-success" data-toggle="modal"
                                        data-target="#exampleModal">Sign in
                                </button>
                                <button className="btn btn-outline-danger ml-3">Sign out</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true"
                     aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Form</h5>
                                <button className="btn-close btn-outline-danger" data-dismiss="modal"
                                        aria-label="close">
                                    <FontAwesomeIcon icon={faWindowClose}/>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="row mb-3">
                                        <label For="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label For="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label For="inputPassword" className="col-sm-2 col-form-label">Message</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                    <fieldset>
                                        <div className="row mb-3">
                                            <legend className="col-form-label col-sm-2">Radio</legend>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input type="radio" className="form-check-input"
                                                           name="radios" value="option1" id="radios1" checked/>
                                                    <label For="radios1" className="form-check-label">Radio 1</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" className="form-check-input"
                                                           name="radios" value="option2" id="radios2"/>
                                                    <label For="radios2" className="form-check-label">Radio 2</label>
                                                </div>
                                                <div className="form-check disabled">
                                                    <input type="radio" className="form-check-input"
                                                           name="radios" value="option3" id="radios3" disabled/>
                                                    <label For="radios3" className="form-check-label">Radio 3</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-form-label col-sm-2">Checkbox</div>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="gridCheck"/>
                                                    <label For="gridCheck" className="form-check-label">Save
                                                        password</label>
                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button className="btn btn-secondary">Save changes</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Navbar;