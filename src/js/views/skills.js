import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export class Skills extends React.Component {
	editExperience = index => {
		let temp;

		temp = document.querySelector("#title" + index);
		temp.innerHTML = "<input name='title" + index + "' size='30' value='" + temp.innerHTML + "' />";

		temp = document.querySelector("#company" + index);
		temp.innerHTML = "<input name='tempcompany' size='37'value='" + temp.innerHTML + "' />";

		temp = document.querySelector("#description" + index);
		temp.innerHTML = "<textarea name='tempdescription' rows='3' cols='36'>" + temp.innerHTML + "</textarea>";

		temp = document.querySelector("#fromdate" + index);
		temp.innerHTML = "<input name='tempfromdate' size='10' value='" + temp.innerHTML + "' />";

		temp = document.querySelector("#todate" + index);
		temp.innerHTML = "<input name='temptodate' size='10' value='" + temp.innerHTML + "' />";
		document.querySelector("#save" + index).innerHTML = "<button class='btn btn-primary'>Save</button>";
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container bg-dark">
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
													name="fromdate"
													placeholder="From"
												/>
												-
												<input
													className="m-1 display-inline-block"
													size="10"
													type="text"
													name="todate"
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
									{store.skills.map((item, index) => {
										return (
											<div key={index} className="card mt-2">
												<div className="card-body text-left">
													<div className="float-right">
														<i
															className="fas fa-pencil-alt mr-3"
															onClick={() => this.editExperience(index)}
														/>
														<i className="fas fa-trash-alt" />
													</div>
													<i id={"fromdate" + index} className="dates">
														{item.from_date}
													</i>{" "}
													-{" "}
													<i id={"todate" + index} className="dates">
														{item.to_date}
													</i>
													<h5 id={"title" + index} className="card-title text-center">
														{item.title}
													</h5>
													<h6 id={"company" + index} className="card-title text-center">
														{item.company}
													</h6>
													<p id={"description" + index} className="card-text text-left">
														{item.description}
													</p>
												</div>
												<div className="p-3 border-top">
													<input
														className="display-inline-block"
														type="checkbox"
														onClick={e =>
															actions.selectResumePage(
																"experiences",
																"resume",
																index,
																e.target.checked
															)
														}
														checked={item.resume ? "checked" : ""}
													/>
													Resume
													<input
														className="ml-4 display-inline-block"
														type="checkbox"
														onClick={e =>
															actions.selectResumePage(
																"experiences",
																"page",
																index,
																e.target.checked
															)
														}
														checked={item.page ? "checked" : ""}
													/>
													Page
													<div
														id={"save" + index}
														className="float-right"
														onClick={() => {
															alert(
																document.querySelector("[name=title" + index + "]")
																	.value
															);
														}}
													/>
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
