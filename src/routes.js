import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const routes = [
    {
        path: '/',
        component: () => <Home />,
        exact: true
    },
    {
        path: '/about',
        component: () => <About />,
        exact: false
    },
    {
        path: '/contact',
        component: () => <Contact />,
        exact: false
    },
    {
        path: '',
        component: () => <NotFound />,
        exact: false
    }
]

export default routes;