import React, { useState, useEffect } from 'react';
import './stylesheets/app.css';

import { Menu, Icon, Sidebar, Button } from 'semantic-ui-react';

import DesktopMenu from './components/desktopMenu';
import Home from './containers/home';
import About from './containers/about';
import Projects from './containers/projects2';

import BottomDiv from './components/bottomDiv';

const navItems = [
	{ path: 'https://drive.google.com/file/d/1vxbaEq6k9qG_oiPPLOSGrq59DAoN1My7/view?usp=sharing', icon: 'file outline', text: 'Resume' },
	{ path: 'https://www.linkedin.com/in/catherine-yang-0ab40b3a/', icon: 'linkedin', text: 'LinkedIn' },
	{ path: "https://codepen.io/liahnee", icon: 'codepen', text: 'CodePen' },
	{ path: 'https://github.com/liahnee', icon: 'github alternate', text: 'Github' },
	
	// { path: '/contact', icon: 'envelope outline', text: 'Contact' },
];

export default function App() {
	const handleMobileMenu = (text) => {
		setVisible(false);
	}

	return (
		<div className="app">
			<DesktopMenu navItems={navItems} />
				<Sidebar.Pushable>
					<Sidebar
						as={Menu}
						animation="overlay"
						icon="labeled"
						inverted
						onHide={() => setVisible(false)}
						vertical
						visible={visible}
						width="thin"
						id="bar"
					>
						{navItems.map((item, idx) => (
							<a href={item.path} target="_blank" rel="noopener noreferrer" key={idx}> 
								<Menu.Item onClick={() => handleMobileMenu(item.text)}>
									<Icon name={item.icon} />
									{item.text}
								</Menu.Item>
							</a>
						))}
					</Sidebar>

					<Sidebar.Pusher dimmed={visible} id="pusher">
						<Button circular icon="user outline" onClick={() => setVisible(true)} id="stickyBtn" className="mobile-only" />
						<Home />
						<About />
						<Projects />
						<BottomDiv />
					</Sidebar.Pusher>
				</Sidebar.Pushable>
		</div>
	);
}
