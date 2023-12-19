import React from "react";
import book from '../data/books.json'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap"

function AllTheBooks() {
    return (
        <Container>
            <Row>
                {book.fantasy.map((libro) => {
                    return (
                        <Col xs={12} sm={6} md={3} key={libro.asin}>
                            <Card>
                                <Card.Img variant="top" src={libro.img} />
                                <Card.Body>
                                    <Card.Title>{libro.title}</Card.Title>
                                    <Card.Text>{libro.price}</Card.Text>
                                    <Card.Text>Categoria: {libro.category}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    );
}

export default AllTheBooks;