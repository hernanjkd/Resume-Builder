import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export class Experiences extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-3" />
								<div className="col-5 text-center">
									<div className="card mt-2">
										<div className="card-body">
											<div className="text-right">
												Dates
												<input
													className="m-1 display-inline-block"
													size="10"
													type="text"
													name="title"
													placeholder="From"
												/>
												-
												<input
													className="m-1 display-inline-block"
													size="10"
													type="text"
													name="title"
													placeholder="To"
												/>
											</div>
											<input
												className="m-1"
												size="37"
												type="text"
												name="title"
												placeholder="Title"
											/>
											<input
												className="m-1"
												size="37"
												type="text"
												name="company"
												placeholder="Company"
											/>
											<textarea rows="3" cols="36" name="description" placeholder="Description" />
										</div>
										<div className="card-footer text-muted">
											<input className="display-inline-block" type="checkbox" />
											Resume
											<input className="ml-4 display-inline-block" type="checkbox" />
											Page
											<button className="btn btn-primary float-right">Save</button>
										</div>
									</div>
									{store.experiences.map((item, index) => {
										return (
											<div key={index} className="card mt-2">
												<div className="card-body text-left">
													<div className="float-right">
														<i className="fas fa-pencil-alt mr-3" />
														<i className="fas fa-trash-alt" />
													</div>
													<i className="dates">
														{item.from_date} - {item.to_date}
													</i>
													<h5 className="card-title text-center">{item.title}</h5>
													<h6 className="card-title text-center">{item.company}</h6>
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
								<div className="col-4" />
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
