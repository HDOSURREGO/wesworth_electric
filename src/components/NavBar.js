import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";
// import Electric from "./Electric";
// import Builders from "./Builders";
// import Management from "./Management";
import WesworthElectric from "./img/WElectric_transparente.png";
import "./NavBar.css";

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="nav-logo">
					<Link to={"/"} className="link">
						<img src={WesworthElectric} alt="Wesworth Construction" />
					</Link>
				</div>
				<div className="nav-titles">
					<ul>
						<li>
							<Link to={"/management"} className="link">
								{/* {Home} */}
								HOME
							</Link>
						</li>
						<li>
							<Link to={"/builders"} className="link">
								{/* {Industrial} */}
								INDUSTRIAL
							</Link>
						</li>
						<li>
							<Link to={"/electric"} className="link">
								{/* {Commercial} */}
								COMMERCIAL
							</Link>
						</li>
						<li>
							<Link to={"/"} className="link">
								{/* {PropertyManagers} */}
								PROPERTY MANAGERS
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
