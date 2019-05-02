import React from 'react';
import Foot from '../components/Foot';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../index.css';
import axios from 'axios';

class ProjectBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {}
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const projectID = this.props.match.params.projectID;
		const url = `/api/v2/pages/${projectID}/?type=projects.ProjectsPage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					project: res.data,
					image: res.data.project_image_url.url
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
				<MDBContainer className="pt-5 d-flex flex-nowrap desk-margin">
					<MDBRow className="pb-5">
						<MDBCol md="12" lg="6" className="order-lg-1 mobile-pad">
							<h1 className="h1">{this.state.project.project_h_one}</h1>
							<h2 className="h5-responsive">{this.state.project.project_h_two}</h2>
							<p>{this.state.project.project_intro_p}</p>
							<a href={this.state.project.project_url} target="_blank">
								<MDBBtn outline className="evro-navy-btn">
									See Project
								</MDBBtn>
							</a>
						</MDBCol>
						<MDBCol md="12" lg="6" className="order-lg-2 mobile-pad">
							<img src={this.state.image} alt="" className="img-fluid z-depth-5" />
						</MDBCol>
						<MDBCol md="12" lg="12" className="order-lg-3 desk-absolute">
							<h2 className="h2-responsive font-weight-normal">Site Released</h2>
							<p>{this.state.project.project_p}</p>
							<h2 className="h2-responsive font-weight-normal">Technologies and Services</h2>
							<div
								dangerouslySetInnerHTML={{ __html: this.state.project.project_tech_stack_description }}
							/>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ProjectBlock;
