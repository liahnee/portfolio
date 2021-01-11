import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../stylesheets/menuBar.css';

export default (props) => {
	const [ redirect, setRedirect ] = useState(false);

	function handleHome() {
		setRedirect(true);
	}
	return (
		<div className="computer-only">
			{redirect ? <Redirect to={'/home'} /> : null}
			<nav className="menuBar">
				<img id="nav-logo" alt="logo image" src={Logo} onClick={() => handleHome()} />

				<div id="nav-btn-container">
					{props.navItems.map((item, idx) => (
						<a href={item.path} target="_blank" rel="noopener noreferrer" key={idx}>
							<button className="menuItem">
								<Icon name={item.icon} />
								{item.text}
							</button>
						</a>
					))}
				</div>
			</nav>
		</div>
	);
};
