import React, { useState } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ExperienceCard = props => {
	const [editMode, setEditMode] = useState(false);

	const [title, setTitle] = useState(props.title);
	if (props.title != title) setTitle(props.title);
	const [company, setCompany] = useState(props.company);
	if (props.company != company) setCompany(props.company);
	const [description, setDescription] = useState(props.description);
	if (props.description != description) setDescription(props.description);
	const [fromDate, setFromDate] = useState(props.fromDate);
	if (props.fromDate != fromDate) setFromDate(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);
	if (props.toDate != toDate) setToDate(props.toDate);

	return (
		<div className="card mt-2 bg-light">
			<div className={editMode ? "card-body text-center" : "card-body text-left"}>
				<div className="float-left">
					<i className="fas fa-trash-alt mr-3" />
					{editMode ? (
						<i className="fas fa-times fa-lg" onClick={() => setEditMode(!editMode)} />
					) : (
						<i className="fas fa-pencil-alt" onClick={() => setEditMode(!editMode)} />
					)}
				</div>
				<div className={editMode ? "text-center" : "text-right"}>
					{editMode ? (
						<DatePicker
							className="datepicker"
							selected={new Date(fromDate)}
							dateFormat="MM/dd/yyyy"
							fixedHeight
							showMonthDropdown
							showYearDropdown
							onChange={date => {
								setFromDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
							}}
						/>
					) : (
						<i className="dates">{fromDate} - </i>
					)}
					{editMode ? (
						<DatePicker
							className="datepicker"
							selected={new Date(toDate)}
							dateFormat="MM/dd/yyyy"
							fixedHeight
							showMonthDropdown
							showYearDropdown
							onChange={date => {
								setToDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
							}}
						/>
					) : (
						<i className="dates">{toDate}</i>
					)}
				</div>
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
					<textarea rows="3" cols="36" onChange={e => setDescription(e.target.value)} value={description} />
				) : (
					<p className="card-text text-left">{description}</p>
				)}
			</div>
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div className="card-footer text-muted">
							<input
								className="display-inline-block"
								type="checkbox"
								onChange={e =>
									actions.selectResumePage("experiences", "resume", props.index, e.target.checked)
								}
								checked={props.resume === "true" ? "checked" : ""}
							/>
							Resume
							<input
								className="ml-4 display-inline-block"
								type="checkbox"
								onChange={({ target: { checked } }) =>
									actions.selectResumePage("experiences", "page", props.index, checked)
								}
								checked={props.page === "true" ? "checked" : ""}
							/>
							Page
							{editMode ? (
								<button
									className="btn btn-info float-right"
									onClick={() =>
										alert(`Title: ${title}\nCompany: ${company}\nDescription: ${description}
												\nFrom Date: ${fromDate}`)
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
	index: PropTypes.number,
	title: PropTypes.string,
	company: PropTypes.string,
	description: PropTypes.string,
	fromDate: PropTypes.string,
	toDate: PropTypes.string,
	resume: PropTypes.string,
	page: PropTypes.string
};
