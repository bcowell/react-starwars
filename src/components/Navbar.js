import React from 'react';
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
            <NavLink href="/ships/">Ships</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/bcowell/react-starwars">Source Code</NavLink>
        </NavItem>
    </Nav>

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <ReactstrapNavbar style={{ backgroundColor: "#20232a" }} dark expand="md">
                    <NavbarBrand href="/">React Star Wars</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavLinks />
                    </Collapse>
                </ReactstrapNavbar>
            </div>
        );
    }
}

export default Navbar;