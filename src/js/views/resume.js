import React, { useState } from "react";
import "../../styles/resume.scss";
import { Context } from "../store/appContext";

export const Resume = props => {
	return (
		<Context.Consumer>
			{({ actions }) => {
				return (
					<div className="resume h-100 w-75 m-2">
						<div className="float-left">left side</div>
						<div className="float-right">right side</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
