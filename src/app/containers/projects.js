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
		skills: 'React, Redux, Rails, JWT',
		description: 'This project was built to mock a patient chart used in the primary care clinics. Users can create multiple patient profile, their chief complaints, and visit chart for each complaint.',
		github: 'https://github.com/liahnee/whr_frontend',
		live: ''
	},
	{
		image: AC,
		title: 'Adopt a Child',
		skills: 'Ruby, Rails, SQL ',
		description: "This is a game app where a user can adopt a child of random stats and gender. Users can create a schedule for the child and how each schedule affected child's status to figure out their characteristics.",
		github: 'https://github.com/liahnee/child_rails_mod2',
		live: ''
	},
	{
		image: Tree,
		title: 'Grow a Tree',
		skills: 'Vanilla Javascript, Ruby on Rails',
		description: 'Users can select a random seed and watch it grow into different tree as it is wateredd.',
		github: 'https://github.com/liahnee/tree',
		live: ''
	},
	{
		image: ST,
		title: 'Sentimental Tweet',
		skills: 'React, Redux, Rails, JWT',
		description: 'This app calls on Tweeter API and runs sentiment API on their most recent tweets. Users can login to create favorites and observe trends on their Tweet sentiment.',
		github: 'https://github.com/liahnee/sentimentTweet',
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

	return (
		<div className="projects">
			<Header style={{marginTop: '80px'}}>  </Header><br /><br />
			<Grid columns={3} centered stackable divided className="projectGrid">
					{gridRowMap(projects)}
			</Grid>
		</div>
	);
};
