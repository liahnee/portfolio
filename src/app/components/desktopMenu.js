import React, { useState } from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../stylesheets/menuBar.css';

export default (props) => {
	const [ redirect, setRedirect ] = useState(false);

	function handleHome() {
		setRedirect(true);
	}
	return (
		<React.Fragment>
			{redirect ? <Redirect to={'/home'} /> : null}

			<nav className="menuBar">
				<img id="nav-logo" src={Logo} onClick={() => handleHome()} />
				<div id="nav-btn-container">
					
					{props.navItems.map((item, idx) => (
						<button className="menuItem" as="a" href={item.path} target="_blank" color="black" rel="noopener noreferrer" key={idx} >
							<Icon name={item.icon} />
							{item.text}
						</button>
					))}
					
				 </div>
			</nav>
		</React.Fragment>
	);
};
