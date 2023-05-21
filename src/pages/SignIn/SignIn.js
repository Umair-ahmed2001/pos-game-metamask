import React, { useState } from 'react'
import auth from '../../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then(userCredential => {
            setLoading(false);
            if (userCredential.user) history.replace('/metamask');
        }).catch(err => {
            console.log({err});
            setLoading(false);
        })
    }
    return (
        <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase">Sign In</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                            required 
                            type="email" 
                            placeholder="Enter email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}/>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          { loading ? <Spinner animation="border" variant="light" size="sm"/> : 'Sign In'}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Not registered yet? {" "}
                        <a href="/signup" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default SignIn;
