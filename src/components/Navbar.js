import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import auth from '../firebase/firebase';
import { useHistory } from 'react-router-dom';

const NavbarComponent = () => {
    const history = useHistory();

    const signOutHandler = () => {
        console.log("Is this running?")
        auth.signOut().then(() => {
            history.push('/');
        }).catch(err => {
            console.log(err);
        })
    } 

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>POS Game</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={signOutHandler}>
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;