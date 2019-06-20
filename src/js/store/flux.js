const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				firstName: "Hernan",
				lastName: "Garcia",
				email: "hernan.garcia@gmail.com",
				dob: "5/30/80",
				phone: "(305)878-3294",
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
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: false,
					page: false
				},
				{
					title: "Restaurant Manager",
					company: "Centerplate",
					description:
						"Managed people and distributed the workload among all the employees. Set tables and silverware.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: true,
					page: false
				},
				{
					title: "Car Washer",
					company: "Clean Clean Cars",
					description: "Cleaned cars the best way that anyone can.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: false,
					page: true
				},
				{
					title: "Warehouse Manager",
					company: "Bill Hansen's Catering",
					description: "Organized events and employees.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
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
					skill: "PHP",
					level: 5,
					resume: false,
					page: true
				},
				{
					skill: "Java",
					level: 5,
					resume: false,
					page: true
				},
				{
					skill: "Scheme",
					level: 5,
					resume: false,
					page: false
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
					page: false
				}
			],
			education: [
				{
					school: "FIU",
					degree: null,
					courses: "JavaScript Programming",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: true
				},
				{
					school: "4 Geeks Academy",
					degree: "Full Stack Developer",
					courses: null,
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
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
