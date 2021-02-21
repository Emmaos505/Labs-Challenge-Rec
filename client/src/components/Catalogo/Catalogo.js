import React, {useEffect, useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalogo.css';
import {Row, Col, Spinner} from 'react-bootstrap';


const Catalogo = ({productos, loading, precio, condicion}) => {
   
    const [productosArenderizar, setProductosArenderizar] = useState([]);
   
    // si ya esta seteada la condición, no se actualiza en funcion al seteo de los precios,
    // por eso me creo una dependencia para poder actualizarlo automáticamente
    const [perilla, setPerilla] = useState(false);

    useEffect(() => {
        setProductosArenderizar(productos);
        
        if (condicion === "Nuevos") {
            var arregloOrdenado = productos.filter(producto => {
                return producto.condition === "new"
            });
            
            setProductosArenderizar(arregloOrdenado);
            setPerilla(!perilla);
        }
        
        if (condicion === "Usados") {
            var arregloOrdenado = productos.filter(producto => {
                return producto.condition !== "new"
            });
            
            setProductosArenderizar(arregloOrdenado);
            setPerilla(!perilla);
        }
        
        
        
        
    }, [productos, condicion])
   

    useEffect(() => {
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
    }, [precio, perilla])



   
   
   
   
   
   
   
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
           
           {productosArenderizar && productosArenderizar.map((producto, index) => (
               <ProductCard key = {index} title = {producto.title} image = {producto.thumbnail}
               price = {producto.price} condition = {producto.condition} stock = {producto.available_quantity} />
           ))} 
           
        </Row>
    )
   }
}

export default Catalogo
