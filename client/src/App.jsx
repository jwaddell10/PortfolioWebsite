import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./components/Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavBar />,
			// loader: rootLoader,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/portfolio",
					element: <Portfolio />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
