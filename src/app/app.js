import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/app.css';

import { Menu, Icon, Image, Segment, Sidebar, Button } from 'semantic-ui-react';

import Routes from './routes';
import DesktopMenu from './components/desktopMenu';

import BottomDiv from './components/bottomDiv';

const navItems = [
	{ path: '/home', icon: 'gamepad', text: 'Home' },
	{ path: '/about', icon: 'user outline', text: 'About' },
	{ path: '/projects', icon: 'github alternate', text: 'Projects' }
	// { path: '/blogs', icon: 'pencil alternate', text: 'Blogs' },
	// { path: '/contact', icon: 'mail outline', text: 'Contact' }
];

export default function App() {
	const [ visible, setVisible ] = useState(false);
	const [ activeItem, setActiveItem ] = useState(window.location.pathname);
	const [ isMobile, setIsMobile ] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(max-width: 800px)').matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	});
	const handleMobileMenu = (path) => {
		setActiveItem(path)
	}

	return (
		<div className="app">
			{isMobile ? (
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
							<Menu.Item as={Link} to={item.path} key={idx} onClick={() => handleMobileMenu(item.path)}>
								<Icon name={item.icon} />
								{item.text}
							</Menu.Item>
						))}
					</Sidebar>

					<Sidebar.Pusher dimmed={visible} id="pusher">
						<Button circular icon="sidebar" onClick={() => setVisible(true)} id="stickyBtn" />
						<Routes isMobile={isMobile} />
						<BottomDiv activeItem={activeItem} />
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			) : (
				<div>
					<DesktopMenu navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} />
					<Routes isMobile={isMobile} />
					<BottomDiv activeItem={activeItem} />
				</div>
			)}
			
		</div>
	);
}
