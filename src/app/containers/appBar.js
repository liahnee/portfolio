import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Typography, Toolbar } from '@material-ui/core';
import { Home, MailOutline, GitHub, PersonOutline, Book } from '@material-ui/icons';

import MenuButton from '../components/menuButton';
s
const navItems = [
	{ path: '/home', icon: <Home /> },
	{ path: '/about', icon: <PersonOutline /> },
	{ path: '/projects', icon: '</>' },
	{ path: '/blogs', icon: <Book /> },
	{ path: '/contact', icon: <MailOutline /> }
];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function MenuBar(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div>Liahnee ==> About, Projects {`</>`}, Blogs, Contact</div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>

						{/* {navItems.map((item) => (
							<MenuButton
								key={item.path}
								className={classes.menuButton}
								color={window.location.pathname.startsWith(item.path) ? 'primary' : 'secondary'}
								to={item.path}
								icon={item.icon}
							/>
						))} */}
					</Toolbar>
				</AppBar>
			</div>
		</React.Fragment>
	);
}
