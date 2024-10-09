import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/contact");
	};

	return (
		<>
			<h1 className="title">
				Hello, world! I&apos;m Jonathan Waddell. And I do web
				development.
			</h1>
			<button onClick={handleClick}>Contact me</button>
		</>
	);
}
