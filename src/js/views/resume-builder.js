import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop";

import { Context } from "../store/appContext";
import { Experiences } from "./experiences";

export class Builder extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="top-panel row">
								<div className="top-panel col-12 border-bottom text-center">top panel</div>
							</div>
							<div className="body row">
								<div className="left-panel col-5 border-right text-center">
									<BrowserRouter basename="/builder">
										<ScrollToTop>
											<Switch>
												<Route exact path="/experiences" component={Experiences} />
												<Route render={() => <h1>Not found!</h1>} />
											</Switch>
										</ScrollToTop>
									</BrowserRouter>
								</div>
								<div className="right-panel col-7 text-center">right panel</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
