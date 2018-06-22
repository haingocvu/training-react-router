import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
