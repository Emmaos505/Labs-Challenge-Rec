import React, {useEffect, useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalogo.css';
import {Row, Col, Spinner} from 'react-bootstrap';


const Catalogo = ({productos, loading, precio, condicion, currentPage, productsPerPage}) => {
   
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
   
    /* 
    // sort utiliza el valor unicode para realizar el ordenamiento y ese valor 
    unicode normalmente se maneja en strings. Por eso cuando ordena numeros no lo hace correctamente
    function de comparacion(a,b)
    1. menor a 0 --> a ocupa un lugar antes que b
    2. es igual a 0 --> queda igual
    2. mayor a 0 --> b ocupa un lugar antes que a
    */

    // divido los condicionales en dos use effects distintos porque sino, cuando ya está seteado el precio
    // no puedo filtrarlos por condición

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



   
   
    // nos traemos los productos solamente de la pagina donde estemos parados
    // indice del ultimo producto teniendo en cuenta como funciona internamente slice
    // que como primer parametro debemos darle el indice inicial y como segundo la cantidad de elementos
    // la cantidad de elementos teniendo en cuenta el valor inicial
    // slice != splice no modifica el elemento original por eso conviene usarlo
    const indexOfLastProduct = currentPage * productsPerPage; 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productosArenderizar.slice(indexOfFirstProduct, indexOfLastProduct);
   
   
   
   
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
           
           {currentProducts && currentProducts.map((producto, index) => (
               <ProductCard key = {index} title = {producto.title} image = {producto.thumbnail}
               price = {producto.price} condition = {producto.condition} stock = {producto.available_quantity} />
           ))} 
           
        </Row>
    )
   }
}

export default Catalogo
