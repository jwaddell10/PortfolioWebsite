import { Link } from "react-router-dom";
import TherapyVault from "../assets/TherapyVault.png";
import Battleship from "../assets/battleship.png";
import Waldo from "../assets/Waldo.png";
import Chatterzone from "../assets/Chatterzone.png";
import RenalDietRecipes from "../assets/RenalDietRecipes.png";
import "../Styles/Portfolio.css"

export default function Portfolio() {
	// const navigate = useNavigate();

	// const routeChange = (routePath) => {
	//     return () => {
	//         window.location.href = routePath;
	//     }
	// }

	return (
		<>
			<h1>Portfolio</h1>
			<ul className="project-container">
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(`https://therapy-vault.vercel.app/`)
						}
					>
						<img src={TherapyVault} alt="TherapyVault" />
					</Link>
					<p>Project description here</p>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(`https://wheres-waldo-rho.vercel.app/`)
						}
					>
						<img src={Waldo} alt="Waldo" />
					</Link>
					<p>Project description here</p>
				</li>
				<li className="project-and-description">
					<Link
						onClick={() =>
							window.open(
								`https://members-only-production-0929.up.railway.app/`
							)
						}
					>
						<img src={Chatterzone} alt="Chatterzone" />
					</Link>
					<p>Project description here</p>
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
					<p>Project description here</p>
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
					<p>Project description here</p>
				</li>
			</ul>
		</>
	);
}
