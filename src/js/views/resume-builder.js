import React from "react";
import { Context } from "../store/appContext";

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
									{store.experiences.map((item, index) => {
										return (
											<div key={index} className="card mt-2">
												<div className="card-body">
													<h5 className="card-title text-left">{item.title}</h5>
													<h6 className="card-title text-right">{item.company}</h6>
													<p className="card-text text-left">{item.description}</p>
												</div>
												<div className="card-footer text-muted">
													<input
														type="checkbox"
														onClick={e =>
															actions.selectExperience("resume", index, e.target.checked)
														}
														checked={item.resume ? "checked" : ""}
													/>
													Resume
													<input
														className="ml-4"
														type="checkbox"
														onClick={e =>
															actions.selectExperience("page", index, e.target.checked)
														}
														checked={item.page ? "checked" : ""}
													/>
													Page
												</div>
											</div>
										);
									})}
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
