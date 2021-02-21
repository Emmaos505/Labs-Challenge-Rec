import React, {useEffect, useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalogo.css';
import {Row, Col, Form, Button, Spinner} from 'react-bootstrap';


const Catalogo = ({productos, loading, precio}) => {
   
    const [productosArenderizar, setProductosArenderizar] = useState([]);

    useEffect(() => {
        setProductosArenderizar(productos);
        
        //if (precio === "Todos") return setProductosArenderizar(productos);


        if (precio === "Baratos") {
            var arregloOrdenado = [...productosArenderizar].sort(function (a, b) {
                return a.price - b.price ;
            });
            
            setProductosArenderizar(arregloOrdenado)
            
        }
        
        if (precio === "Caros") {
            var arregloOrdenado = [...productosArenderizar].sort(function (a, b) {
                return b.price - a.price ;
                
              });

            setProductosArenderizar(arregloOrdenado)
            
        }
         
        
        
    }, [productos, precio])
   





   
   
   
   
   
   
   
    if (loading) {
    return (
        <Row className= "p-0 m-0 no-gutters h-100">
           
           <Col className = "contenedor-spinner">
           <Spinner animation="grow" variant="secondary" size="sm" className = "mr-2"/>
           <Spinner animation="grow" variant="secondary" className = "mr-2" />
           <Spinner animation="grow" variant="secondary" size="sm" className = "mr-2"/>
           <Spinner animation="grow" variant="secondary" className = "mr-2" />
           <Spinner animation="grow" variant="secondary" size="sm" className = "mr-2"/>
           </Col>
           
        </Row>
    )
   } else {
    return (
        <Row className= "p-0 m-0 no-gutters">
           
           {productosArenderizar && productosArenderizar.map(producto => (
               <ProductCard title = {producto.title} image = {producto.thumbnail}
               price = {producto.price} condition = {producto.condition} stock = {producto.available_quantity} />
           ))} 
           
        </Row>
    )
   }
}

export default Catalogo
