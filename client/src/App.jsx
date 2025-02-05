import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./About";
import Portfolio from "./components/Portfolio";
import Resume from "./Resume";
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
					path: "/resume", 
					element: <Resume />
				}
				// {
				// 	path: "/contact",
				// 	element: <Resume />,
				// },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
