import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { ExperienceCard } from "../component/experienceCard";

export const Experiences = () => {
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [description, setDescription] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const [resume, setResume] = useState(false);
	const [page, setPage] = useState(false);

	return (
		<div className="container bg-dark">
			<div className="card mt-2 bg-light">
				<div className="card-body">
					<div className="text-right">
						Dates
						<input
							className="m-1 display-inline-block"
							size="10"
							type="text"
							placeholder="From"
							value={fromDate}
							onChange={e => setFromDate(e.target.value)}
						/>
						-
						<input
							className="m-1 display-inline-block"
							size="10"
							type="text"
							placeholder="To"
							value={toDate}
							onChange={e => setToDate(e.target.value)}
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
						onChange={e => setDescription(e.target.value)}>
						{description}
					</textarea>
				</div>
				<div className="card-footer text-muted">
					<input
						className="display-inline-block"
						type="checkbox"
						checked={resume ? "checked" : ""}
						onClick={() => setResume(!resume)}
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
						className="btn btn-primary float-right"
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
