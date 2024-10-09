import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="navbar">
				<li className="navbar-home">
					<Link to="/">Home</Link>
				</li>
				<li className="navbar-home">
					<Link to="/about">About</Link>
				</li>
				<li className="navbar-home">
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li className="navbar-home">
					<Link to="/contact">Contact</Link>
				</li>
			</nav>
            <Outlet />
		</>
	);
}
