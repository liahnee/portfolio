import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
// import Projects from './containers/projects';
// import About from './containers/about';
// import Blog from './containers/blog';

class Routes extends React.Component {
	render() {
		console.log("in routes", this.props.isMobile)
		return (
			<React.Fragment>
				<Switch>
					<Redirect exact={true} from="/" to="/home" isMobile={this.props.isMobile}/>
					<Route exact={true} path="/home" component={Home} />
					{/* <Route exact={true} path="/about" component={About} />
					<Route exact={true} path="/projects" component={Projects} /> */}
					{/* <Route exact={true} path="/blog" component={Blog} /> */}
					<Route render={() => <div> Page Not Found </div>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default (withRouter(Routes));
