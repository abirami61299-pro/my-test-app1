import "./App.css";
import {
	ProGamification,
	updateGameAction,
} from "@stagetheproindia/react-progamification";

export function App() {
	return (
		<div className="container">
			<header className="App">
				<div className="game">
					<ProGamification
						userId={"sales@bookwater.com"}
						applicationId={"64e32cc4293347c3f0446edd"}
						clientId={"cf72b228-203b-45c7-a2b3-65e141442b03"}
						clientSecret={"Yba8Q~zXlMHCTdhwLIkQ3T_JvKGrBSWCLisvibwJ"}
					/>
				</div>
			</header>
		</div>
	);
}
