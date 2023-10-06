import "./App.css";
import {
	ProGamification,
	updateGameAction,
} from "@stagetheproindia/react-progamification";

function App() {
	const update = () => {
		updateGameAction(
			"e6a1a490-5b8a-440e-bcb6-9707b8b971e1",
			"651d3a7ff445e71cdc3acb21",
			"",
			""
		);
	};
	return (
		<div className="container">
			<header className="App">
				<ProGamification
					userId={"e6a1a490-5b8a-440e-bcb6-9707b8b971e1"}
					applicationId={"651d3a7ff445e71f7a3acb16"}
					clientId={"08ce0068-2906-44d4-b840-b268e5511624"}
					clientSecret={"2BG8Q~Vsd33.QQ93jcejZkrr5aVyXvxbl_FrubYg"}
				/>
			</header>
			<button onClick={update}>Play</button>
		</div>
	);
}

export default App;
