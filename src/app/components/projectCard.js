import React from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default (props) => {
	const handleGit = (e) => {
		e.preventDefault();
	};

	return (
		<Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={props.item.image} wrapped ui={false}/>
			<Card.Content className='contentBox' style={{minHeight: '200px', paddingRight: '-17px'}}>
				
				<Card.Header>{props.item.title}</Card.Header>
				<Card.Meta>{props.item.skills}</Card.Meta>
				<Card.Description>{props.item.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className="ui two buttons">
					<a href={props.item.github} target="_blank">
						<Button basic color="blue" content="Blue">
							<Icon name="github" />Github
						</Button>
					</a>

					<Button disabled basic color="teal" content="Teal">
						<Icon name="world" />Live Demo
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
};
