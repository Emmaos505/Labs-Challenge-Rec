import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalogo.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

const Catalogo = ({productos}) => {
    return (
        <Row className= "p-0 m-0 no-gutters">
           
           {productos && productos.map(producto => (
               <ProductCard title = {producto.title} image = {producto.thumbnail}
               price = {producto.price} condition = {producto.condition} stock = {producto.available_quantity} />
           ))} 
           
        </Row>
    )
}

export default Catalogo
