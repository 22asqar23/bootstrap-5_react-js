import React from "react";
import './../css/bootstrap_5.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro, faImage, faWindowClose} from "@fortawesome/free-solid-svg-icons";

function Slider() {
    return (
        <main>
            <div className="carousel slide" id="carouselControls" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpaperaccess.com/full/685208.jpg" alt=""
                             className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.pxwall.com/wp-content/uploads/2019/04/4K-UHD-Desktop-Wallpapers.jpg"
                             alt=""
                             className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://wallpapershome.com/images/wallpapers/yosemite-5120x2880-5k-4k-wallpaper-8k-forest-osx-apple-mountains-181.jpg"
                            alt=""
                            className="d-block w-100"/>
                    </div>
                </div>
                <a href="#carouselControls" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon">

                    </span>
                </a>
                <a href="#carouselControls" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon">

                    </span>
                </a>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img
                            src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" className="w-100"/>
                    </div>
                    <div className="col-md-8 col-sm-12 text-center">
                        <h2 className="my-3">About me</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error eveniet ipsa labore rem
                        suscipit? Accusamus eaque expedita officiis perferendis praesentium quod veniam voluptatem!
                        Adipisci aperiam aut cupiditate deleniti dolore dolorum eveniet excepturi, explicabo facere
                        illum in labore molestias mollitia natus neque nostrum obcaecati quam quidem quos tenetur totam
                        veritatis.
                    </div>
                </div>
                <h3 className="text-center my-5">Hello World</h3>
                <div className="row gy-5">
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h4>Lorem ipsum</h4>
                        <FontAwesomeIcon icon={faCameraRetro} size="3x"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum ipsa iusto praesentium
                            rerum velit?</p>
                    </div>
                </div>
            </div>
            <div className="container my-5 text-center">
                <p>
                    <a href="#multiCollapse1"
                       data-toggle="collapse"
                       className="btn btn-secondary "
                       role="button"
                       aria-controls="multiCollapse1"
                       aria-expanded="false">Hello</a>

                    <button className="btn btn-secondary"
                            data-target="#multiCollapse2"
                            type="button"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="multiCollapse2">World
                    </button>
                    <button className="btn btn-secondary"
                            data-target=".multi-collapse"
                            type="button"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="multiCollapse1 multiCollapse2">Hello World
                    </button>
                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse show" id="multiCollapse1">
                            <div className="card card-body">
                                <img className="w-100"
                                     src="https://images.pexels.com/photos/356807/pexels-photo-356807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse show" id="multiCollapse2">
                            <div className="card card-body">
                                <img className="w-100"
                                     src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse show" id="multiCollapse1">
                            <div className="card card-body">
                                <img className="w-100"
                                     src="https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse show" id="multiCollapse2">
                            <div className="card card-body">
                                <img className="w-100"
                                     src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Slider;