import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Products extends Component {
    render() {
        let {match} = this.props;
        console.log(match);
        let products = [
            {
                id: 1,
                name: 'Apple Iphone X',
                price: 22000000
            },
            {
                id: 2,
                name: 'Samsung Galaxy s9',
                price: 19000000
            },
            {
                id: 3,
                name: 'Sony Xpedia Z10',
                price: 30000000
            }
        ];
        let productsEle = products.map((product, index) => {
            return (
                <NavLink key={index} to=''>
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

            </div>

        )
    }
}

export default Products;