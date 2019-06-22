import React, { useState } from "react";
import "../../styles/resume.scss";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const Resume = () => {
	const formatDate = date => {
		return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
	};

	// Set the width and height of the resume
	const letterPaperHxWRatio = 279.4 / 215.9;
	const resumeToScreenWidthRatio = 741 / 1280;
	const screenWidth = window.innerWidth;
	const resumeWidth = Math.floor(screenWidth * resumeToScreenWidthRatio);
	const resumeHeight = Math.floor(resumeWidth * letterPaperHxWRatio);

	const resumeDimensions = {
		width: resumeWidth,
		height: resumeHeight
	};

	return (
		<Context.Consumer>
			{({ store }) => {
				const name = store.user.firstName + " " + store.user.lastName;
				const exp = store.experience.filter(item => item.resume === "true");
				const edu = store.education.filter(item => item.resume === "true");
				const [{ description: purpose }] = store.purpose.filter(item => item.resume === "true");
				const [{ description: about }] = store.about.filter(item => item.resume === "true");
				const skills = store.skills.filter(item => item.resume === "true");

				return (
					<div className="resume container m-2" style={resumeDimensions}>
						<div className="row">
							<div className="left-side col-3 text-left border-right p-1">
								<div className="name text-center border-bottom w-100 p-2 mb-1">{name}</div>
								<div className="dob">D.O.B. {store.user.dob}</div>
								<div className="email word-wrap py-1">{store.user.email}</div>
								<div className="phone">{store.user.phone}</div>
								{store.links.map((item, index) => {
									return (
										<div key={index} className="links word-wrap py-1">
											{item.url}
										</div>
									);
								})}
								<h5 className="mt-3">Related Skills</h5>
								<ul>
									{skills.map((item, index) => {
										return <li key={index}>{item.skill}</li>;
									})}
								</ul>
								<h5 className="mt-3">About Me</h5>
								<div className="about">{about}</div>
							</div>
							<div className="col text-left p-1">
								<p className="purpose">{purpose}</p>
								<h4>My Experiences</h4>
								{exp.map((item, index) => {
									return (
										<div className="mt-3" key={index}>
											<i className="dates float-right">
												{formatDate(new Date(item.fromDate))} -{" "}
												{formatDate(new Date(item.toDate))}
											</i>
											<h5>{item.company}</h5>
											<h6>{item.title}</h6>
											<p>{item.description}</p>
										</div>
									);
								})}
								<h4>Education</h4>
								{edu.map((item, index) => {
									<div className="mt-3" key={index}>
										<i className="dates float-right">
											{formatDate(new Date(item.fromDate))} - {formatDate(new Date(item.toDate))}
										</i>
										<h5>{item.degree}</h5>
										<h6>{item.school}</h6>
										<p>{item.course}</p>
									</div>;
								})}
							</div>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
