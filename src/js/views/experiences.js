import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Experiences extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-12 text-center">
									<div className="card mt-2">
										<div className="card-body">
											<input className="m-1" type="text" name="title" placeholder="Title" />
											<textarea rows="3" name="description" placeholder="Description" />
										</div>
										<div className="pb-3">
											<input className="display-inline-block" type="checkbox" />
											Resume
											<input className="ml-4 display-inline-block" type="checkbox" />
											Page
										</div>
										<div className="card-footer text-muted">
											<button className="btn btn-primary">Save</button>
										</div>
									</div>
									{store.experiences.map((item, index) => {
										return (
											<div key={index} className="card mt-2">
												<div className="card-body">
													<h5 className="card-title text-center">{item.title}</h5>
													<p className="card-text text-left">{item.description}</p>
												</div>
												<div className="p-3 border-top">
													<input
														className="display-inline-block"
														type="checkbox"
														onClick={e =>
															actions.selectExperience("resume", index, e.target.checked)
														}
														checked={item.resume ? "checked" : ""}
													/>
													Resume
													<input
														className="ml-4 display-inline-block"
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
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
