import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="card">
            <h3 className="titulo">Zapatillas Nike</h3>
            <img className="img-product" src="" alt="" />
            <h3 className="titulo">$110</h3>
            <p className="condicion" >condicion</p>
            <p className="stock" >stock</p>
        </div>
    )
}

export default ProductCard
