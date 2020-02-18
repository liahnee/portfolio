import React from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react';

export default (props) => {
	return (
		<Card style={{ marginLeft: 'auto', marginRight: 'auto', minWidth: '30vw', fontSize: '16px' }}>
			<Card.Content>
				<Card.Header style={{fontFamily: "'Patua One', cursive", fontSize: '30px'}}>{props.item.title}</Card.Header>
			</Card.Content>

			<Image src={props.item.image} wrapped ui={false} />
			<Card.Content className="contentBox" style={{ paddingRight: '-17px' }}>
				<Card.Meta style={{color: 'black', fontSize: '18px'}}>{props.item.skills}</Card.Meta>
				<Card.Description style={{fontFamily: "'Bree Serif', serif"}}>{props.item.skillsDescription}</Card.Description>
			</Card.Content>

			<Card.Content>
				<Card.Meta style={{color: 'black', fontSize: '18px'}}>Project:</Card.Meta>
				<Card.Description style={{fontFamily: "'Bree Serif', serif"}}>{props.item.description}</Card.Description>
			</Card.Content>

			<Card.Content extra>
				{/* <div className="ui two buttons"> */}
				<Button
					as="a"
					href={props.item.github}
					target="_blank"
					rel="noopener noreferrer"
					basic
					color="blue"
					fluid
				>
					<Icon name="github" />Github
				</Button>
				{/* <Button disabled basic color="teal" content="Teal">
						<Icon name="world" />Live Demo
					</Button> */}
				{/* </div> */}
			</Card.Content>
		</Card>
	);
};
