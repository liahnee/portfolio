import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../stylesheets/menuBar.css';

export default (props) => {
	const [ redirect, setRedirect ] = useState(false);

	function handleClick(path) {
		props.setActiveItem(path);
		setRedirect(true);
	}
	// debugger
	return (
		<div className="menuBar" style={{ marginBottom: '12px' }}>
			{redirect ? <Redirect to={props.activeItem} /> : null}
			<Menu pointing secondary>
				<Menu.Item onClick={() => handleClick('/home')}>
					<Image src={Logo} size="mini" />
				</Menu.Item>
				<Menu.Menu position="right">
					
					{props.navItems.map((item) => (
						<Menu.Item
							key={item.text}
							name={item.text}
							active={props.activeItem === item.path}
							onClick={() => handleClick(item.path)}
						/>
					))}
				</Menu.Menu>
			</Menu>
		</div>
	);
}
