import React, { useState } from 'react';
import {
    Collapse,
    Navbar as ReactstrapNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const NavLinks = () =>
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="https://github.com/bcowell/react-starwars">Source Code</NavLink>
        </NavItem>
    </Nav>

function Navbar() {

    const [isOpen, toggle] = useState(false);

        return (
            <div>
                <ReactstrapNavbar style={{ backgroundColor: "#20232a" }} dark expand="md">
                    <NavbarBrand href="/">React Star Wars</NavbarBrand>
                    <NavbarToggler onClick={() => toggle(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>
                        <NavLinks />
                    </Collapse>
                </ReactstrapNavbar>
            </div>
        );
}

export default Navbar;