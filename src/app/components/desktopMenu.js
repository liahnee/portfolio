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
			<img id="nav-logo" src={Logo} onClick={() => handleHome()} />
			<nav className="menuBar">
				
				<div id="nav-btn-container">
					
					{props.navItems.map((item, idx) => (
						<a href={item.path} target="_blank" rel="noopener noreferrer" key={idx} >
							<button className="menuItem" >
								<Icon name={item.icon} />
								{item.text}
							</button>
						</a>
					))}
					
				 </div>
			</nav>
		</React.Fragment>
	);
};
