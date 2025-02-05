import { Link } from "react-router-dom";
import TherapyVault from "../assets/TherapyVault.png";
import Battleship from "../assets/battleship.png";
import Waldo from "../assets/Waldo.png";
import Chatterzone from "../assets/Chatterzone.png";
import RenalDietRecipes from "../assets/RenalDietRecipes.png";
import MemoryCard from "../assets/MemoryCard.png";
import "../Styles/Portfolio.css";

export default function Portfolio() {
	// const navigate = useNavigate();

	// const routeChange = (routePath) => {
	//     return () => {
	//         window.location.href = routePath;
	//     }
	// }

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				backgroundColor: "#343b3f",
			}}
		>
			<h1 style={{ textAlign: "center", color: "whitesmoke" }}>
				Projects
			</h1>
			<ul className="project-container">
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(`https://therapy-vault.vercel.app/`)
						}
					>
						<img src={TherapyVault} alt="TherapyVault" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">TherapyVault</h1>
						<p className="project-description">
							A cloud storage application to store mental health
							therapy files. Full-stack application built with
							React, Express, PostgreSQL. Created to improve
							organization and save time for mental health workers
						</p>
					</div>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(`https://wheres-waldo-rho.vercel.app/`)
						}
					>
						<img src={Waldo} alt="Waldo" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">Where's Waldo</h1>
						<p className="project-description">
							Fun game based on classic Where's Waldo game. Users
							can submit scores to leaderboard and see if they
							reach the high score.
						</p>
					</div>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(
								`https://renal-diet-recipes.vercel.app/`
							)
						}
					>
						<img src={RenalDietRecipes} alt="RenalDietRecipes" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">Renal Diet Recipes</h1>
						<p className="project-description">
							Recipe app tailored for folks with kidney disease.
							Features kidney-safe recipes, and consultation from
							experienced kidney dieticians to ensure safety in
							ingredients and recipes.
						</p>
					</div>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(
								`https://memory-card-fawn.vercel.app/`
							)
						}
					>
						<img src={MemoryCard} alt="MemoryCard" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">Memory Card</h1>
						<p className="project-description">
							A memory game built in React. Players scored based
							on accuracy
						</p>
					</div>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(
								`https://battleship-five-red.vercel.app/`
							)
						}
					>
						<img src={Battleship} alt="Battleship" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">Battleship</h1>
						<p className="project-description">
							An MVC battleship game in Vanilla JS, developed
							using TDD and built with Webpack. Utilizes Object
							Oriented Programming techniques to organize code
							effectively.
						</p>
					</div>
				</li>
				{/* <li className="project-and-description">
					<Link
						onClick={() =>
							window.open(
								`https://members-only-production-0929.up.railway.app/`
							)
						}
					>
						<img src={Chatterzone} alt="Chatterzone" />
					</Link>
					<div className="project-title-and-description">
						<h1 className="project-title">Chatterzone</h1>
						<p className="project-description">
							Chat application featuring authentication using PassportJS. Built 
						</p>
					</div>
				</li> */}
			</ul>
		</div>
	);
}
