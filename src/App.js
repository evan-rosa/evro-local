import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBHamburgerToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
	state = {
		collapseID: ''
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	closeCollapse = (collapseID) => () => this.state.collapseID === collapseID && this.setState({ collapseID: '' });

	componentDidMount() {
		addResponseMessage("So, what's on your mind?");
	}

	handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		// Now send the message throught the backend API
		addResponseMessage();
	};

	render() {
		const overlay = (
			<div
				id="sidenav-overlay"
				style={{ backgroundColor: 'transparent' }}
				onClick={this.toggleCollapse('mainNavbarCollapse')}
			/>
		);

		const { collapseID } = this.state;

		return (
			<Router>
				<div className="flyout-wrapper">
					<MDBNavbar color="white" dark expand="md" className="sticky-top" scrolling>
						<MDBNavbarBrand href="/">
							<span className="App-logo">EVRO</span>
						</MDBNavbarBrand>
						<MDBHamburgerToggler
							className="hide-ham"
							color="#2c3d5c"
							id="hamburger1"
							onClick={this.toggleCollapse('mainNavbarCollapse')}
						/>

						<MDBCollapse id="mainNavbarCollapse" isOpen={this.state.collapseID} navbar>
							<MDBNavbarNav right>
								<MDBNavItem>
									<MDBNavLink exact to="/about" onClick={this.closeCollapse('mainNavbarCollapse')}>
										About
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink onClick={this.closeCollapse('mainNavbarCollapse')} to="/projects">
										Projects
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink onClick={this.closeCollapse('mainNavbarCollapse')} to="/contact">
										Contact
									</MDBNavLink>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBNavbar>

					<main>
						<Routes />
					</main>
					<Widget
						handleNewUserMessage={this.handleNewUserMessage}
						title="Welcome to the EvRo.io ChatBot!"
						subtitle="Ask the EvRo ChatBot anything about Evan Rosa."
					/>
				</div>
			</Router>
		);
	}
}

export default App;
