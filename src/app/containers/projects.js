import React from 'react';
import '../stylesheets/projects.css'

import { Grid, Header } from 'semantic-ui-react';
import ProjectCard from '../components/projectCard';

import WHR from '../assets/whr_front.png';
import AC from '../assets/adopt.png';
import Tree from '../assets/tree.png';
import ST from '../assets/sentT.png';

const projects = [
	{
		image: WHR,
		title: 'Web Health Record',
		skills: 'Redux, JWT, React, Rails',
		description: 'This project was built to mock a patient chart used in the primary care clinics. Users can create multiple patient profile, their chief complaints, and visit chart for each complaint.',
		skillsDescription: 'The skill sets exercised with this project was implementing JWT and Redux for the React front-end and Ruby on Rails backend. Redux was used for the scalability of the app. Data massaging was also done for diagnosis which searches on ICD11 API.',
		github: 'https://github.com/liahnee/whr_frontend',
		live: ''
	},
	{
		image: ST,
		title: 'Sentimental Tweet',
		skills: 'React, Rails,',
		description: 'This app calls on Tweeter API and runs sentiment API on their most recent tweets. Users can login to create favorites and observe trends on their Tweet sentiment.',
		skillsDescription: 'This was a team project where I took a lead on the front-end. The project focused on using React and its library, Semantic UI, as well as a thought out UI/UX designs.',
		github: 'https://github.com/liahnee/sentimentTweet',
		live: ''
	},
	{
		image: Tree,
		title: 'Grow a Tree',
		skills: 'Vanilla Javascript, Ruby on Rails',
		description: 'Users can select a random seed and watch it grow into different tree as it is wateredd.',
		skillsDescription: 'Focus of the project was using vanilla CSS and vanilla JS that reacts with different data sent from the backend.',
		github: 'https://github.com/liahnee/tree',
		live: ''
	},
	{
		image: AC,
		title: 'Adopt a Child',
		skills: 'Ruby, Rails, SQL',
		description: "This is a game app where a user can adopt a child of random stats and gender. Users can create a schedule for the child and how each schedule affected child's status to figure out their characteristics.",
		skillsDescription: 'This project was entirely Ruby on Rails for the front and the back-end. This project has many backend calculations and conditions for a different set of characteristics the data holds for rendering and carrying out new calculations. Vanilla CSS was used for UI. ',
		github: 'https://github.com/liahnee/child_rails_mod2',
		live: ''
	},
];

export default (props) => {
	// const handleChange = () => {
	// 	// anchor
	// };

	const gridRowMap = (proj) => {
		let row = [];
		proj.forEach((item, idx) => {
			if (idx % 3 === 0) {
				row.push(
					<Grid.Row key={idx}>
						<Grid.Column>
							<ProjectCard item={proj[idx]} />
						</Grid.Column>
						{proj[idx + 1] ? <Grid.Column><ProjectCard item={proj[idx + 1]} /></Grid.Column> : null}
						{proj[idx + 2] ? <Grid.Column><ProjectCard item={proj[idx + 2]} /> </Grid.Column>: null}
					</Grid.Row>
				);
			}
		});
		return row;
	};


	const gridRowMapForTwo = (proj) => {
		let row = [];
		proj.forEach((item, idx) => {
				row.push(
						<Grid.Column>
							<ProjectCard item={proj[idx]} />
						</Grid.Column>
				);
			}
		)
		return row;
	} 

	return (
		<div className="projects">
			<Header style={{marginTop: '80px'}}>  </Header><br /><br />
			<Grid columns={2} centered stackable className="projectGrid">
					{gridRowMapForTwo(projects)}
			</Grid>
		</div>
	);
};
