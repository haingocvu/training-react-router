import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Menu from "./components/Menu";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Body */}
                    <Switch>
                        {this.showContent(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }

    showContent = routes => {
        let rs = null;
        if (routes.length) {
            rs = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            })
        }
        return rs;
    }
}

export default App;
