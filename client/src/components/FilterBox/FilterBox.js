import React from 'react';
import './FilterBox.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

const FilterBox = ({ precio, condicion, setCondicion, setPrecio, paginate }) => {


    const handlePrecio = (e) => {
        const { value } = e.target;
        setPrecio(value);
        paginate(1);
    }

    const handleCondicion = (e) => {
        const { value } = e.target;
        setCondicion(value);
        paginate(1);
    }




    return (
        <Row id="filtrosBusqueda" className=" p-0 m-0 contenedor-filtros ">
            <Col className="p-0 m-0 d-flex justify-content-center">
                <div className="contenedor-precio">
                    <h4 className="titulo-select-precio" >Precio</h4>
                    <select value={precio} onChange={handlePrecio} name="" id="">
                        <option value="Todos">Todos los productos</option>
                        <option value="Baratos">Mas baratos</option>
                        <option value="Caros">Mas caros</option>
                    </select>
                </div>
            </Col>
            <Col className="p-0 m-0 d-flex justify-content-center">
                <div className="contenedor-condicion">
                    <h4 className="titulo-select-precio" >Condicion</h4>
                    <select value={condicion} onChange={handleCondicion} name="" id="">
                        <option value="Todos">Todos los productos</option>
                        <option value="Usados">Usados</option>
                        <option value="Nuevos">Nuevos</option>
                    </select>
                </div>
            </Col>
        </Row>
    )
}

export default FilterBox

