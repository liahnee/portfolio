import React from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react';

export default (props) => {
	return (
		<Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={props.item.image} wrapped ui={false}/>
			<Card.Content className='contentBox' style={{minHeight: '200px', paddingRight: '-17px'}}>
				
				<Card.Header>{props.item.title}</Card.Header>
				<Card.Meta>{props.item.skills}</Card.Meta>
				<Card.Description>{props.item.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				{/* <div className="ui two buttons"> */}
						<Button as='a' href={props.item.github} target='_blank' rel="noopener noreferrer" basic color="blue" fluid >
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
