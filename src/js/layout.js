import React from "react";
import injectContext from "./store/appContext";
import { Experiences } from "./views/experiences";
import { Skills } from "./views/skills";
import { Resume } from "./views/resume";

const views = {
	experiences: Experiences,
	skills: Skills,
	resume: Resume
	// page: Page
};

export class Layout extends React.Component {
	state = {
		left: "experiences",
		right: "resume"
	};

	rowStyle = {
		height: window.innerHeight - 30
	};

	render() {
		const LeftPanel = views[this.state.left];
		const RightPanel = views[this.state.right];
		return (
			<div className="d-flex flex-column h-100">
				<div className="container">
					<div className="top-panel row">
						<div className="top-panel col-12 border-bottom text-center">top panel</div>
					</div>
					<div className="body row">
						<div className="left-panel col-5 border-right text-center" style={this.rowStyle}>
							<div className="text-left">
								<div
									className="route border-bottom border-left p-1 text-light d-inline-block"
									onClick={() => this.setState({ left: "experiences" })}>
									Experiences
								</div>
								<div
									className="route border-bottom border-left p-1 text-light d-inline-block"
									onClick={() => this.setState({ left: "skills" })}>
									Skills
								</div>
								<div className="route border border-top-0 p-1 text-light d-inline-block">Education</div>
							</div>
							<LeftPanel />
						</div>
						<div className="right-panel col-7 text-center" style={this.rowStyle}>
							<div className="text-right">
								<div
									className="route border-bottom border-left p-1 text-light d-inline-block"
									onClick={() => this.setState({ right: "resume" })}>
									Resume
								</div>
								<div className="route border border-top-0 p-1 text-light d-inline-block">Page</div>
							</div>
							<RightPanel />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default injectContext(Layout);
