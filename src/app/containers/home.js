import React from 'react';
import '../stylesheets/home.css';

import { Container, Image, Header } from 'semantic-ui-react';
import ProfilePic from '../assets/profilePic.jpg';

export default (props) => {
	return (
		<div className="home" style={{ maxWidth: '80vw', marginLeft: 'auto', marginRight: 'auto' }}>
			<Container textAlign="center">
				<Image circular floated='left' size="medium" src={ProfilePic} />
				{props.isMobile ? (
					<div style={{ paddingTop: '10%' }}>
						{/* <Header textAlign="left" style={{ paddingTop: '10%', paddingLeft: '350px' }}> */}
						Hello, I'm Catherine Yang.
						{/* </Header> */}
					</div>
				) : (
					<>

						<Header textAlign="left" style={{ paddingTop: '10%', paddingLeft: '350px',fontFamily: "'Acme', sans-serif", fontSize: '80px' }}>
							Hello, <br/>
							I'm Catherine Yang.
						</Header>
						
						<p style={{fontFamily: "'Permanent Marker', cursive", fontSize: '40px'}}>
						I enjoy being creative with Javascript and oil paints. <br />
						(Separetely!)
						</p>
						</>
					
				)}
			</Container>
		</div>
	);
};
