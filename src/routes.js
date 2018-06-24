import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";

const routes = [
    {
        path: '/',
        main: () => <Home />,
        exact: true
    },
    {
        path: '/about',
        main: () => <About />,
        exact: false
    },
    {
        path: '/contact',
        main: () => <Contact />,
        exact: false
    },
    {
        path: '/products',
        main: ({ match, location }) => <Products match={match} location={location} />,
        exact: false
    },
    {
        path: '/login',
        main: ({ location }) => <Login location={location} />,
        exact: false
    },
    {
        path: '',
        main: () => <NotFound />,
        exact: false
    }
]

export default routes;