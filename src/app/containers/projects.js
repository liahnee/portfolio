import React from 'react';
import '../stylesheets/projects.css'

import { Grid } from 'semantic-ui-react';
import ProjectCard from '../components/projectCard';

const projects = [
	{
		image: '',
		title: 'Web Health Record',
		skills: 'React, Redux, Rails, JWT',
		description: '',
		github: '',
		live: ''
	}
];

export default (props) => {
	// const handleChange = () => {
	// 	// anchor
	// };

	const gridRowMap = (projects) => {
		let row = [];
		projects.map((item, idx) => {
			if (idx % 3 === 0) {
				row.push(
					<Grid.Row>
						<Grid.Column>
							<ProjectCard item={projects[idx]} />
						</Grid.Column>
						{projects[idx + 1] ? <Grid.Column><ProjectCard item={projects[idx + 1]} /></Grid.Column> : null}
						{projects[idx + 2] ? <Grid.Column><ProjectCard item={projects[idx + 2]} /> </Grid.Column>: null}
					</Grid.Row>
				);
			}
		});
		return row;
	};

	return (
		<div className="projects">
			<Grid columns={3} centered stackable divided className="projectGrid">
					{gridRowMap(projects)}
			</Grid>
		</div>
	);
};
