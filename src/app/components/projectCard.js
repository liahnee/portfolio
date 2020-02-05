import React from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react';

export default (item, ...props) => {
	return (
		<Card style={{marginLeft: 'auto', marginRight: 'auto'}}>
			<Card.Content>
				<Image floated="right" size="mini" src={item.image} />
				<Card.Header>{item.title}</Card.Header>
				<Card.Meta>{item.skills}</Card.Meta>
				<Card.Description>{item.description}</Card.Description>
			</Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'> 
                    <Button basic color='blue' content='Blue'>
                        <Icon name='github'/>Github
                    </Button>
                    <Button basic color='teal' content='Teal'>
                        <Icon name='world' />Live Demo
                    </Button>
                </div>
            </Card.Content>
		</Card>
	);
};
