import React from 'react';
import { ListGroup, Badge, Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './RSidebar.module.css';
import 'boxicons/css/boxicons.min.css';

const RSidebar = () => {
    return (
        <div className={styles.RSidebarContainer}>
            <Col>
                    {/* Temas Populares */}
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Temas Populares</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    Reducción de Plásticos <Badge bg="primary" className="ms-2">32</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Limpieza de Playas <Badge bg="primary" className="ms-2">27</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Conservación Marina <Badge bg="primary" className="ms-2">17</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Iniciativas Destacadas */}
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Iniciativas Destacadas</Card.Title>
                            <Card.Text>
                                <strong>Cero Plásticos en Playas Chilenas</strong>
                                <p>Campaña nacional que organiza limpiezas de playas.</p>
                            </Card.Text>
                            <Button href="https://www.ceroplasticosplayas.cl" variant="primary" size="sm">
                                Ver Más <i className="bi bi-chevron-right ms-1"></i>
                            </Button>
                            <Card.Text className="mt-3">
                                <strong>Guardianes del Mar</strong>
                                <p>Programa educativo para colegios en zonas costeras.</p>
                            </Card.Text>
                            <Button href="https://www.guardianesdelmar.cl" variant="primary" size="sm">
                                Ver Más <i className="bi bi-chevron-right ms-1"></i>
                            </Button>
                        </Card.Body>
                    </Card>

                    {/* Eventos Próximos */}
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Eventos Próximos</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    Webinar: Innovación Marina <Badge bg="info" className="ms-2">12 de Septiembre</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Taller de Limpieza Costera junto a "Guardianes del Mar" <Badge bg="info" className="ms-2">20 de Septiembre</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Encuentro anual
                                    "Pesca Sostenible en la V región"<Badge bg="info" className="ms-2">28 de Septiembre</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                            <Button href="/calendario" variant="secondary" size="sm" className="mt-3">
                                Ver Calendario Completo <i className="bi bi-calendar ms-1"></i>
                            </Button>
                        </Card.Body>
                    </Card>

                    {/* Contribuyentes Principales */}
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Contribuyentes Principales</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    <i className="bi bi-person-circle me-2"></i>
                                    María Pérez
                                    <Badge bg="primary" className="ms-2">210 Posts</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="bi bi-person-circle me-2"></i>
                                    Juan López
                                    <Badge bg="primary" className="ms-2">198 Posts</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default RSidebar;
