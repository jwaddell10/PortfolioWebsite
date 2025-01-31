import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./About";
import Portfolio from "./components/Portfolio";
import Contact from "./Contact";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavBar />,
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
