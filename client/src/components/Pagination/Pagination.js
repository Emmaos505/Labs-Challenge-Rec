import React from 'react';
import { Pagination, Row, Col } from 'react-bootstrap'
import './Pagination.css';





const Paginacion = ({productsPerPage, totalProducts, paginate}) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
            pageNumbers.push(i);
    }
    
   /* 
   Para configurar el next, habría que preguntar si existe con el pageNumbers.length, para despues si 
   modificar el currentPage
   */
    
    
    
    return (
        <div className="container-general">
            <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                    <Pagination className = "pagination-container">
                        <Pagination.First  className = "item-grow" />
                        <Pagination.Prev className = "item-grow" />
                        {pageNumbers[0] && pageNumbers.map((number,index) => (
            
                           <Pagination.Item className = "item-grow" onClick = {() => paginate(number)} key = {index}>{number}</Pagination.Item>
                        ))}
            
                        {/* <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>
            
                        <Pagination.Item>{20}</Pagination.Item> */}
                        <Pagination.Next className = "item-grow" />
                        <Pagination.Last className = "item-grow" />
                    </Pagination>
                </Col>
            </Row>
        </div>
    )
}

export default Paginacion
