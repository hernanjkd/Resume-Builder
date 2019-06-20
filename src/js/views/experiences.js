import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { ExperienceCard } from "../component/experienceCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Experiences = () => {
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [description, setDescription] = useState("");
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const [resume, setResume] = useState(false);
	const [page, setPage] = useState(false);

	return (
		<div className="container">
			<div className="card mt-2 bg-light">
				<div className="card-body">
					<div className="text-center">
						<DatePicker
							className="datepicker"
							selected={fromDate ? new Date(fromDate) : null}
							dateFormat="MM/dd/yyyy"
							fixedHeight
							showMonthDropdown
							showYearDropdown
							placeholderText="From Date"
							onChange={date => {
								setFromDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
							}}
						/>

						<DatePicker
							className="datepicker"
							selected={toDate ? new Date(toDate) : null}
							dateFormat="MM/dd/yyyy"
							fixedHeight
							showMonthDropdown
							showYearDropdown
							placeholderText="To Date"
							onChange={date => {
								setToDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
							}}
						/>
					</div>
					<input
						className="m-1"
						size="37"
						type="text"
						placeholder="Title"
						value={title}
						onChange={({ target: { value: v } }) => setTitle(v)}
					/>
					<input
						className="m-1"
						size="37"
						type="text"
						placeholder="Company"
						value={company}
						onChange={({ target: { value } }) => setCompany(value)}
					/>
					<textarea
						rows="3"
						cols="36"
						name="description"
						placeholder="Description"
						defaultValue={description}
						onChange={e => setDescription(e.target.value)}
					/>
				</div>
				<div className="card-footer text-muted">
					<input
						className="display-inline-block"
						type="checkbox"
						checked={resume ? "checked" : ""}
						onChange={() => setResume(!resume)}
					/>
					Resume
					<input
						className="ml-4 display-inline-block"
						type="checkbox"
						checked={page ? "checked" : ""}
						onClick={() => setPage(!page)}
					/>
					Page
					<button
						className="btn btn-info float-right"
						onClick={() =>
							alert(
								`Title: ${title}\nCompany: ${company}\nDescription: ${description}\nResume: ${resume}`
							)
						}>
						Save
					</button>
				</div>
			</div>
			<Context.Consumer>
				{({ store }) => {
					return store.experiences.map((item, index) => {
						return (
							<ExperienceCard
								key={index}
								index={index}
								title={item.title}
								company={item.company}
								description={item.description}
								fromDate={item.fromDate}
								toDate={item.toDate}
								resume={item.resume}
								page={item.page}
							/>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
};
