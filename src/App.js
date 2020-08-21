import React from "react";
import { Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Electric from "./components/Electric";
// import Builders from "./components/Builders";
// import Management from "./components/Management";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	render() {
		return (
			<div>
				<div>
					<NavBar />
				</div>
				<div>
					<Switch>
						{/* <Route exact path="/" component="" />
						<Route exact path="/electric" component="" />
						<Route exact path="/builders" component="" />
						<Route exact path="/management" component="" /> */}
					</Switch>
				</div>
				<div>{/* <Footer /> */}</div>
			</div>
		);
	}
}
export default App;
