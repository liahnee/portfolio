import React from 'react';
import '../stylesheets/home.css';

import { Container, Image, Header } from 'semantic-ui-react';
import ProfilePic from '../assets/profilePic.jpg';

export default (props) => {
	return (
		<div className="home" style={{ maxWidth: '80vw', marginLeft: 'auto', marginRight: 'auto' }}>
			<Container textAlign="center">
				<Image circular size="medium" src={ProfilePic} />
				{props.isMobile ? (
					<div style={{paddingTop: '10%'}}>
						{/* <Header textAlign="left" style={{ paddingTop: '10%', paddingLeft: '350px' }}> */}
							
							Hello, I'm Catherine Yang.
						{/* </Header> */}
						</div>
				) : (
					<span>
						<Header textAlign="left" style={{ paddingTop: '10%', paddingLeft: '350px' }}>
							{' '}
							Hello, I'm Catherine Yang.{' '}
							this is not mobile
						</Header>

					</span>
				)}
			</Container>
		</div>
	);
};
