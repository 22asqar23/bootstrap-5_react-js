import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/react-fontawesome"
import './App.css';

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

class  App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Slider/>
                <Footer/>
            </div>
        );
    }
}

export default App;
