import { useNavigate, Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
// import { Resume } from "../Resume";
import "../Styles/Home.css";

export default function Home() {
	const navigate = useNavigate();

	const handleClick = (url) => {
		navigate(url);
	};

	return (
		<main>
			<section className="main">
				<h1 className="title">
					Hello, world! I&apos;m Jonathan Waddell. And I do web
					development.
				</h1>
				<div className="social-links-container">
					<Link
						className="socials-icon"
						onClick={`https://github.com/jwaddell10`}
					>
						<GitHubIcon fontSize="large" />
					</Link>
					<Link
						className="socials-icon"
						onClick={`https://x.com/Healer2Hacker`}
					>
						<XIcon fontSize="large" />
					</Link>
				</div>

				<div
					className="button-container"
					style={{ display: "flex", justifyContent: "center" }}
				>
					<button onClick={() => {handleClick("/resume")}}>Resume</button>
					<button onClick={() => {handleClick("/about")}}>About Me</button>
					<button onClick={() => {handleClick("/projects")}}>Projects</button>
				</div>
			</section>
		</main>
	);
}
