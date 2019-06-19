import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Experiences } from "./views/experiences";
import { Skills } from "./views/skills";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<div className="container">
							<div className="top-panel row">
								<div className="top-panel col-12 border-bottom text-center">top panel</div>
							</div>
							<div className="body row">
								<div className="left-panel col-5 border-right text-center">
									<Switch>
										<Route exact path="/" component={Experiences} />
										<Route exact path="/experiences" component={Experiences} />
										<Route exact path="/skills" component={Skills} />
										<Route render={() => <h1>Not found!</h1>} />
									</Switch>
								</div>
								<div className="right-panel col-7 text-center">right panel</div>
							</div>
						</div>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
