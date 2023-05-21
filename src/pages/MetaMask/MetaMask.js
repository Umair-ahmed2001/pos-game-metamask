import React from 'react'
import useMetaMask from '../../hooks/useMetamask';
import NavbarComponent from '../../components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './MetaMask.css'

const MetaMask = () => {
    const { connect, disconnect, isActive, account } = useMetaMask();

    return (
        <>
            <NavbarComponent/>
            <Container>
                <Row className="vh-90 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                <div className="border border-2 border-primary"></div>
                    <Card className="shadow px-4">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-center text-uppercase">Meta Mask</h2>
                        </div>
                        <Card.Text className='text-center'>
                            MetaMask - a crypto wallet.
                        </Card.Text>

                        <Container>
                            <Row>
                                <Col>
                                    <Button 
                                        onClick={connect} 
                                        variant="primary"
                                        className="d-flex justify-content-center align-items-center"
                                        disabled={isActive}
                                    >
                                        Connect With MetaMask
                                    </Button>
                                </Col>
                                <Col>
                                    <Button 
                                        onClick={disconnect} 
                                        variant="danger"
                                        className="d-flex justify-content-center align-items-center"
                                        disabled={!isActive}
                                    > 
                                        Disconnect from MetaMask
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                        <Card.Text className='text-center m-5'>
                            { isActive ? <span>Connected with {account}</span> : <span>Not Connected</span> }
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </>    
    )
}

export default MetaMask;
