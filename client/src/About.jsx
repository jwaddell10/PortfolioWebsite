import FCCCat from "./assets/FCCCat.png";
import TherapyVault from "./assets/TherapyVault.png";
import "./Styles/About.css";

export default function About() {
	return (
		<body className="about-me-container">
			<h1>About me</h1>
			<p>
				My Web Development journey began in August 2022 when I enrolled
				into FreeCodeCamps Responsive Web Design certification. My first
				project was to code a cat website in html, and at this point I
				knew I was hooked. I completed this course, and afterwards found
				The Odin Project, the curriculum I'm currently utilizing to hone
				my skills in Web Development. <br />
				<br />I love coding. The aha feeling I get when I solve a tricky
				bug, the satisfaction I feel when I show friends my new
				projects, or the feeling of accomplishment when I experience a
				breakthrough all draw me to programming. <br />
				<br />
				When I'm not coding, I enjoy playing tennis, pickleball, or
				chess
			</p>
			<div className="project-container">
				<div className="first-project">
					<h1>My first project</h1>
					<img src={FCCCat} alt="" />
				</div>
				<div className="recent-project">
					<h1>Most recent work</h1>
					<img src={TherapyVault} alt="" />
				</div>
			</div>
		</body>
	);
}
