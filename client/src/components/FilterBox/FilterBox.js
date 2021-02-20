import React from 'react';
import './FilterBox.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

const FilterBox = () => {
    return (
        <Row className="p-0 m-0 contenedor-filtros">
            <Col className="p-0 m-0">
                <div className="contenedor-precio">
                    <h4 className="titulo-select-precio" >Precio</h4>
                    <select name="" id="">
                        <option value="">Todos los productos</option>
                        <option value="">Mas baratos</option>
                        <option value="">Mas caros</option>
                    </select>
                </div>
            </Col>
            <Col className="p-0 m-0">
                <div className="contenedor-condicion">
                    <h4 className="titulo-select-precio" >Condicion</h4>
                    <select name="" id="">
                        <option value="">Todos los productos</option>
                        <option value="">Usados</option>
                        <option value="">Nuevos</option>
                    </select>
                </div>
            </Col>
        </Row>
    )
}

export default FilterBox

