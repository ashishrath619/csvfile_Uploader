import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Apponityicon from './apponityicon.png'
function BasicExample() {
    return (
        <Navbar expand="lg" variant="dark" className="cardNavbar">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Apponityicon}
                        width="40"
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <b>Appointy Front End Task</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        CSV Uploader App
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BasicExample;