import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Row className = "m-0 footer-container">
            <Col className = "d-flex justify-content-center mb-3">
                <a className = "git-footer" target="_blank" href="https://github.com/Emmaos505/Labs-Challenge-Rec">
                    <span className="marca-footer">
                        HenryLabs
                        </span>
                </a> 
            </Col>
            <Col className = "d-flex justify-content-center flex-column align-items-center">
                <p className = "texto-footer">Proyecto realizado por Emmanuel Otero Spesot</p>
                <p className = "texto-footer">- 2021 -</p>
            </Col>
       </Row>
    )
}

export default Footer


