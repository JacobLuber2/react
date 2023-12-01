// import reactlogo from "../../../assets/logo.svg";
// import tclogo from "../../../assets/TCLogoOnly.png";
import { logo, TCLogoOnly } from "../../../assets";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function TopNav() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img alt="" src={logo} height="40" className="d-inline-block align-top" /> Learning React
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
						<NavLink className="nav-link" to="/films">
							Films
						</NavLink>
					</Nav>
					<Navbar.Brand className="justify-content-end">
						<img src={TCLogoOnly} height="40" alt="TrueCoders" />
					</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNav;
