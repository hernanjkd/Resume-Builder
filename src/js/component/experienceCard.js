import React, { useState } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ExperienceCard = props => {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [company, setCompany] = useState(props.company);
	const [description, setDescription] = useState(props.description);
	const [fromDate, setFromDate] = useState(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);

	return (
		<div className="card mt-2">
			<div className={editMode ? "card-body text-center" : "card-body text-left"}>
				<div className="float-right">
					{editMode ? (
						<i className="fas fa-times fa-lg mr-3" onClick={() => setEditMode(!editMode)} />
					) : (
						<i className="fas fa-pencil-alt mr-3" onClick={() => setEditMode(!editMode)} />
					)}
					<i className="fas fa-trash-alt" />
				</div>
				{editMode ? (
					<input
						className="m-1 display-inline-block"
						size="10"
						type="text"
						value={fromDate}
						onChange={({ target }) => setFromDate(target.value)}
					/>
				) : (
					<i className="dates">{fromDate}</i>
				)}{" "}
				-{" "}
				{editMode ? (
					<input
						className="m-1 display-inline-block"
						size="10"
						type="text"
						value={toDate}
						onChange={({ target: { value } }) => setToDate(value)}
					/>
				) : (
					<i className="dates">{toDate}</i>
				)}
				{editMode ? (
					<input
						className="m-1"
						size="37"
						type="text"
						value={title}
						onChange={({ target: { value: v } }) => setTitle(v)}
					/>
				) : (
					<h5 className="card-title text-center">{title}</h5>
				)}
				{editMode ? (
					<input
						className="m-1"
						size="37"
						type="text"
						value={company}
						onChange={e => setCompany(e.target.value)}
					/>
				) : (
					<h6 className="card-title text-center">{company}</h6>
				)}
				{editMode ? (
					<textarea rows="3" cols="36" name="description" onChange={e => setDescription(e.target.value)}>
						{description}
					</textarea>
				) : (
					<p className="card-text text-left">{description}</p>
				)}
			</div>
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div className="p-3 border-top">
							<input
								className="display-inline-block"
								type="checkbox"
								onClick={e =>
									actions.selectResumePage("experiences", "resume", props.index, e.target.checked)
								}
								checked={props.resume ? "checked" : ""}
							/>
							Resume
							<input
								className="ml-4 display-inline-block"
								type="checkbox"
								onClick={({ target: { checked } }) =>
									actions.selectResumePage("experiences", "page", props.index, checked)
								}
								checked={props.page ? "checked" : ""}
							/>
							Page
							{editMode ? (
								<button
									className="btn btn-primary float-right"
									onClick={() =>
										alert(`Title: ${title}\nCompany: ${company}\nDescription: ${description}`)
									}>
									Save
								</button>
							) : (
								""
							)}
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
};

ExperienceCard.propTypes = {
	index: PropTypes.string,
	title: PropTypes.string,
	company: PropTypes.string,
	description: PropTypes.string,
	fromDate: PropTypes.string,
	toDate: PropTypes.string,
	resume: PropTypes.string,
	page: PropTypes.string
};
