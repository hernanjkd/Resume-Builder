import React, { useState } from "react";
import "../../styles/resume.scss";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const Resume = () => {
	const formatDate = date => {
		return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
	};

	return (
		<Context.Consumer>
			{({ store }) => {
				const name = store.user.firstName + " " + store.user.lastName;
				const exp = store.experiences.filter(item => item.resume);
				return (
					<div className="resume container h-100 m-2">
						<div className="row">
							<div className="left-side col-3 text-left border-right p-1">
								<div className="name text-center border-bottom w-100 p-2 mb-1">{name}</div>
								<div className="dob">D.O.B. {store.user.dob}</div>
								<div className="email py-1">{store.user.email}</div>
								<div className="phone">{store.user.phone}</div>
								{store.links.map((item, index) => {
									return (
										<div key={index} className="links py-1">
											{item.url}
										</div>
									);
								})}
							</div>
							<div className="col text-left p-1">
								{exp.map((item, index) => {
									return (
										<div key={index}>
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
							</div>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
