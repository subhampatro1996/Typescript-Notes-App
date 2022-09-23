import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar  fixed='top' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>
                React 
            </Navbar.Brand>
        </Container>
    </Navbar>

  );
};

export default Header;
