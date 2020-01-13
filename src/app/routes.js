import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import NavBar from './pages/navBar';

function Routes() {
	return (
		<>
			<Route component={NavBar} />
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route render={() => <div> Page Not Found </div>} />
			</Switch>
		</>
	);
}

export default Routes;
