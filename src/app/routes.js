import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Home from './containers/home';
import Projects from './containers/projects';
import AppBar from './containers/appBar';

function Routes() {
	return (
		<>
			<Route component={AppBar} />
			<Switch>
				<Redirect exact={true} from='/' to='/home' />
				<Route exact={true} path="/home" component={Home} />
				<Route exact={true} path="/projects" component={Projects} />
				{/* <Route exact={true} path="/blog" component={Blog} />
				<Route exact={true} path="/contact" component={Contact} /> */}
				<Route render={() => <div> Page Not Found </div>} />
			</Switch>
		</>
	);
}

export default withStyles(style)(withRouter(Routes));
