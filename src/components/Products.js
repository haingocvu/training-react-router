import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
    render() {
        let { match, location } = this.props;
        console.log(location);
        let products = [
            {
                id: 1,
                name: 'Apple Iphone X',
                slug: 'apple-iphone-x',
                price: 22000000
            },
            {
                id: 2,
                name: 'Samsung Galaxy s9',
                slug: 'samsung-galaxy-s9',
                price: 19000000
            },
            {
                id: 3,
                name: 'Sony Xpedia Z10',
                slug: 'sony-xpedia-z10',
                price: 30000000
            }
        ];
        let url = match.url;
        let productsEle = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item">{product.id + '-' + product.name + '-' + product.price}</li>
                </NavLink>
            )
        })
        return (

            <div className="container">

                <div className="row">

                    <ul className="list-group">
                        {productsEle}
                    </ul>

                </div>

                <div className="row">
                    <Route path={`${url}/:slug`} component={({ match }) => <Product match={match} />} />
                </div>


            </div>

        )
    }
}

export default Products;