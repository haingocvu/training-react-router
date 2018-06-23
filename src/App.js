import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends Component {
    render() {
        const CustonLink = ({label, to, activeOnlyWhenExact}) => {
            return (
                <Route 
                    path={to} 
                    exact={activeOnlyWhenExact}
                    children={({match})=>{
                        let className = match?"active abc":"";
                        return (
                            <li className={`my-li ${className}`}>
                                <Link to={to}>
                                    {label}
                                </Link>
                            </li>
                        )
                    }}
                />
            )
        }
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <CustonLink label="Home" to="/" activeOnlyWhenExact={true}/>
                            <CustonLink label="About" to="/about"/>
                            <CustonLink label="Contact" to="/contact"/>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
