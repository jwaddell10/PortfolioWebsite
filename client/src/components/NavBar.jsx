import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
	return (
		<>
			<nav className="navbar">
				{/* <nav className="navbar-home"> */}
				<Link to="/">Home</Link>
				{/* </nav> */}
				<nav className="navbar-home">
					<Link to="/about">About</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/contact">Contact</Link>
				</nav>
				{/* <nav className="navbar-home">
					<Link to="/portfolio">Portfolio</Link>
				</nav>
				<nav className="navbar-home">
					<Link to="/contact">Contact</Link>
				</nav> */}
			</nav>
			<Outlet />
		</>
	);
}
