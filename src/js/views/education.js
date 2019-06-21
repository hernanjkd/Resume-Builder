import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { EducationCard } from "../component/educationCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Education = () => {
	const [degree, setDegree] = useState("");
	const [school, setSchool] = useState("");
	const [course, setCourse] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const [resume, setResume] = useState(false);

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
						placeholder="Degree"
						value={degree}
						onChange={({ target: { value: v } }) => setDegree(v)}
					/>
					<input
						className="m-1"
						size="37"
						type="text"
						placeholder="School"
						value={school}
						onChange={({ target: { value } }) => setSchool(value)}
					/>
					<textarea
						rows="3"
						cols="36"
						placeholder="Courses"
						defaultValue={course}
						onChange={e => setCourse(e.target.value)}
					/>
				</div>
				<div className="card-footer text-muted">
					<input
						className="display-inline-block"
						type="checkbox"
						checked={resume ? "checked" : ""}
						onChange={() => setResume(resume === "true" ? "false" : "true")}
					/>
					Resume
					<button
						className="btn btn-info float-right"
						onClick={() =>
							alert(`Title: ${title}\nSchool: ${School}\nCourse: ${Course}\nResume: ${resume}`)
						}>
						Save
					</button>
				</div>
			</div>
			<Context.Consumer>
				{({ store }) => {
					return store.education.map((item, index) => {
						return (
							<EducationCard
								key={index}
								index={index}
								degree={item.degree}
								school={item.school}
								course={item.course}
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
