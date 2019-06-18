const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				first_name: "Hernan",
				last_name: "Garcia",
				email: "sdlfkj@gmail.com",
				dob: "1980-10-30",
				image_url: "http://lorempixel.com/300/400/nature/2",
				resume_style: null,
				theme: null,
				title: "Software Engineer",
				display: "objective"
			},
			experiences: [
				{
					title: "Programmer",
					company: "4 Geeks Academy",
					description: "Worked as a programmer using React and Flask.",
					from_date: "2019-05-01",
					to_date: "2019-09-01",
					resume: false,
					page: false
				},
				{
					title: "Warehouse Manager",
					company: "Bill Hansen's Catering",
					description: "Organized events and employees.",
					from_date: "2014-11-22",
					to_date: "2018-07-04",
					resume: true,
					page: true
				}
			],
			skills: [
				{
					skill: "JavaScript",
					level: 7,
					resume: true,
					page: true
				},
				{
					skill: "React",
					level: 5,
					resume: true,
					page: true
				},
				{
					skill: "Python",
					level: 3,
					resume: true,
					page: true
				}
			],
			education: [
				{
					school: "FIU",
					degree: null,
					courses: "JavaScript Programming",
					from_date: "2010-03-12",
					to_date: "2014-01-17",
					resume: true
				},
				{
					school: "4 Geeks Academy",
					degree: "Full Stack Developer",
					courses: null,
					from_date: "2019-04-29",
					to_date: "2019-06-28",
					resume: true
				}
			],
			products: [
				{
					description: null,
					date: null,
					url: null,
					page: null
				}
			],
			about: [
				{
					description:
						"I really enjoy coding and helping out others, my favorite subject to read is about aliens and other civilizations.<br>This is just some writing so we can see how it looks when there is a good amount of context. Maybe I can create some more content to fill up.",
					resume: true,
					page: false
				},
				{
					description: "Another about me section in case I want a different one in the resume from the page.",
					resume: false,
					page: true
				}
			],
			purpose: [
				{
					description: "Helping companies reach their goals by serving them great mate.",
					resume: true,
					page: true
				}
			],
			links: [
				{
					url: "https://www.linkedin.com/in/hernan-garcia-448400186/"
				},
				{
					url: "https://github.com/hernanjkd"
				}
			],
			certificates: []
		},
		actions: {
			selectResumePage: (obj, resumeORpage, index, value) => {
				let store = getStore();
				store[obj][index][resumeORpage] = value;
				setStore({ store });
			},

			addExperience: []
		}
	};
};

export default getState;
