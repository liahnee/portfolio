import React, { useState } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
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

			<div className="menuBar">
				<Menu secondary className="menu">
					<Menu.Item onClick={() => handleHome()}>
						<Image
							src={Logo}
							size="mini"
							// style={{ marginTop: '5vh', marginLeft: '30px' }}
						/>
					</Menu.Item>
					<Menu.Menu position="right">
						{props.navItems.map((item, idx) => (
							<Menu.Item href={item.path} target="_blank" rel="noopener noreferrer" key={idx}>
								<Icon name={item.icon} />
								{item.text}
							</Menu.Item>
						))}
					</Menu.Menu>
				</Menu>
			</div>
		</React.Fragment>
	);
};
