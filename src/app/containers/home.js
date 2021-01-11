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
		<div id="home">
			<div id="home-container">
				<Image id="home-image"  circular size="medium" src={ProfilePic} />
				<Header
					id="home-header"
					textAlign="left"
				>
					Hello, {isMobile ? null : <br />} I'm {isMobile? <br /> : null } Catherine Yang.
				</Header>
				<p id="home-intro" >
					I enjoy being creative with React, RoR, and oil paints. <br />
					(Separately!)
				</p>
			</div>
		</div>
	);
};
