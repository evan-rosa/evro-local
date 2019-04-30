import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProjectsIndex from './components/projectsIndex';
import Project from './containers/projectBlock';
import About from './components/About';
import Contact from './components/contact';
import Thanks from './components/thankyou';
import Page404 from './components/page404';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={About} />
				<Route exact path="/projects" component={ProjectsIndex} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/thank-you" component={Thanks} />
				<Route exact path="/projects/:projectID" component={Project} />
				<Route component={Page404} />
			</Switch>
		);
	}
}

export default Routes;
