import { useNavigate, Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import "../Styles/Home.css";

export default function Home() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/resume");
	};

	return (
		<main>
			<section className="main">
				<h1 className="title">
					Hello, world! I&apos;m Jonathan Waddell. And I do web
					development.
				</h1>
				<div className="social-links-container"><Link
					className="socials-icon"
					onClick={`https://github.com/jwaddell10`}
				>
					<GitHubIcon fontSize="large"/>
				</Link>
				<Link
					className="socials-icon"
					onClick={`https://x.com/Healer2Hacker`}
				>
					<XIcon fontSize="large"/>
				</Link></div>
				
				<button onClick={handleClick}>Contact me</button>
			</section>
		</main>
	);
}
