import React, { useState, useEffect } from 'react';
import '../stylesheets/home.css';

import { Image, Header } from 'semantic-ui-react';
import ProfilePic from '../assets/profilePic.jpg';

export default (props) => {
	const [ isMobile, setIsMobile ] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(max-width: 800px)').matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div id="home" 
		>
			<div id="home-container">
				<Image id="home-image"  circular size="medium" src={ProfilePic} />
				<Header
					id="home-header"
					textAlign="left"
				>
					Hello, {isMobile ? null : <br />} I'm {isMobile? <br /> : null } Catherine Yang.
				</Header>
				<p id="home-intro" >
					I enjoy being creative with Javascript and oil paints. <br />
					(Separetely!)
				</p>
			</div>


				{/* {isMobile ? (
					<React.Fragment id="">
						<Image circular size="medium" src={ProfilePic} />
						<Header
							// id="home-header"
							textAlign="left"
							style={{
								paddingTop: '10%',
								fontFamily:  "'Patua One', cursive",
								fontSize: '40px'
							}}
						>
							Hello, I'm <br /> Catherine Yang.< br/>
						</Header>
						<p id="home-intro" style={{ textAlign:'left', fontFamily: "'Merienda', cursive", fontSize: '3.5rem', paddingTop: '30px' }}>
							I enjoy being creative with Javascript and oil paints. <br />
							(Separetely!)
						</p>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Image circular floated="left" size="medium" src={ProfilePic} />
						<Header
							// id="home-header"
							textAlign="left"
							style={{
								paddingTop: '10%',
								paddingLeft: '350px',
								fontFamily: "'Patua One', cursive",
								fontSize: '5rem'
							}}
						>
							Hello, <br />
							I'm Catherine Yang.
						</Header>
						<p id="home-intro" style={{ fontFamily: "'Merienda', cursive", fontSize: '2rem'}}>
							I enjoy being creative with Javascript and oil paints. <br />
							(Separately!)
						</p>
					</React.Fragment>
				)} */}
		</div>
	);
};
