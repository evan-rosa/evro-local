import React from 'react';
import Foot from './Foot';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../index.css';
import axios from 'axios';

import ProjectsList from '../containers/projectsList';

class ProjectIndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `/api/v2/pages/?type=projects.ProjectsPage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					projects: res.data.items
				});
			})
			.catch((error) => this.setState({ error }));
	}

	componentDidMount() {
		this.getData();
	}
	render() {
		return (
			<div>
				<MDBContainer className="pt-5">
					<MDBRow className="pb-3">
						<MDBCol md="12">
							<h1 className="h1">Portfolio</h1>
							<p className="h5-responsive">
								Here are just a few featured projects I’ve worked on outsite of federal government
								consulting.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<ProjectsList data={this.state.projects} />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ProjectIndexPage;
