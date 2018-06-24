import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {match} = this.props;
        console.log(match);
        return(
            <h3>this is product detail page of {match.params.slug}</h3>
        )
    }
}

export default Product;