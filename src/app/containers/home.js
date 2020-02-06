import React, { useState, useEffect } from 'react';
import '../stylesheets/home.css';

import { Container, Image, Header } from 'semantic-ui-react';
import ProfilePic from '../assets/profilePic.jpg';

export default (props) => {
	const [ isMobile, setIsMobile ] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(max-width: 800px)').matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	});
	return (
		<div className="home" style={{ maxWidth: '80vw', marginLeft: 'auto', marginRight: 'auto' }}>
			<Container textAlign="center" style={{marginTop: '50px'}}>
				{isMobile ? (
					<React.Fragment>
						<Image circular size="medium" src={ProfilePic} />
						<Header
							textAlign="left"
							style={{
								paddingTop: '10%',
								fontFamily: "'Acme', sans-serif",
								fontSize: '40px'
							}}
						>
							Hello, I'm <br /> Catherine Yang.< br/>
						</Header>
						<p style={{ textAlign:'left', fontFamily: "'Permanent Marker', cursive", fontSize: '30px', paddingTop: '30px' }}>
							I enjoy being creative with Javascript and oil paints. <br />
							(Separetely!)
						</p>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Image circular floated="left" size="medium" src={ProfilePic} />
						<Header
							textAlign="left"
							style={{
								paddingTop: '10%',
								paddingLeft: '350px',
								fontFamily: "'Acme', sans-serif",
								fontSize: '80px'
							}}
						>
							Hello, <br />
							I'm Catherine Yang.
						</Header>

						<p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '40px' }}>
							I enjoy being creative with Javascript and oil paints. <br />
							(Separetely!)
						</p>
					</React.Fragment>
				)}
			</Container>
		</div>
	);
};
