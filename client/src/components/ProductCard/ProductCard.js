import React from 'react';
import './ProductCard.css';
import { Col } from 'react-bootstrap';

const ProductCard = ({ title, image, price, condition, stock }) => {

    //stock = 0;

    return (
        <Col xs={12} md={6} lg={4} /* className="mb-4" */>
            <div className="card">
                <p className="condition">{condition}</p>
                <div className="title-container">
                    <h3 className="titulo">{title}</h3>
                </div>
                <div className="img-container">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="card-body" >
                    {stock ? <p className="stock-disponible" >HAY STOCK</p> :
                        <p className="stock-nodisponible" >NO HAY STOCK</p>}
                    <h3 className="titulo price">${price}</h3>
                </div>
                {/* <p className="stock" >{stock}</p> */}
            </div>
        </Col>
    )
}

export default ProductCard


