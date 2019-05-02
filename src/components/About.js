import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBSimpleChart, MDBCard, MDBBtn, MDBCardBody, MDBCardText } from 'mdbreact';
import Foot from './Foot';

import '../index.css';

import axios from 'axios';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			about_p: [],
			about_skill_web_development_col_one: [],
			about_skill_web_development_col_two: [],
			about_skill_digital_marketing: [],
			about_skill_web_analytics_col_one: [],
			about_skill_web_analytics_col_two: [],
			about_skill_data_science_col_one: [],
			about_skill_data_science_col_two: [],
			about_education: [],
			resume: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `https://evro.herokuapp.com/api/v2/pages/?type=about.AboutPage&fields=*`;
		const resume = `https://evro.herokuapp.com/api/v2/documents/`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					id: res.data.items[0].id,

					about_p: res.data.items[0].about_p,
					about_skill_web_development_col_one: res.data.items[0].about_skill_web_development_col_one,
					about_skill_web_development_col_two: res.data.items[0].about_skill_web_development_col_two,
					about_skill_digital_marketing: res.data.items[0].about_skill_digital_marketing,
					about_skill_web_analytics_col_one: res.data.items[0].about_skill_web_analytics_col_one,
					about_skill_web_analytics_col_two: res.data.items[0].about_skill_web_analytics_col_two,
					about_skill_data_science_col_one: res.data.items[0].about_skill_data_science_col_one,
					about_skill_data_science_col_two: res.data.items[0].about_skill_data_science_col_two,
					about_education: res.data.items[0].about_education
				});
			})
			.catch((error) => this.setState({ error }));
		axios
			.get(resume)
			.then((res) => {
				this.setState({
					id: res.data.items[0].id,
					resume: res.data.items[0].meta.download_url
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
				<MDBContainer className="pb-5">
					<MDBRow className="pt-5">
						<MDBCol md="12">
							<h1 className="h1">About Evan</h1>
							<p className="h5-responsive">{this.state.about_p}</p>
						</MDBCol>
					</MDBRow>

					<MDBRow>
						<MDBCol md="12 pb-5">
							<a href={this.state.resume}>
								<MDBBtn outline className="evro-navy-btn">
									Download my Resume
								</MDBBtn>
							</a>
						</MDBCol>
					</MDBRow>

					<MDBRow className="pb-2">
						<MDBCol md="12">
							<h2 className="h2-responsive font-weight-normal">Skills and Techniques</h2>
						</MDBCol>
					</MDBRow>

					<MDBRow>
						<MDBCol lg="6" md="12" className="mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow className="card-section-pad">
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={80}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h3 className="skill-category h2-responsive">Web Development</h3>
										</MDBCol>
									</MDBRow>

									<MDBRow className="skill-list">
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_web_development_col_one
												}}
											/>
										</MDBCol>
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_web_development_col_two
												}}
											/>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow className="card-section-pad">
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={90}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h3 className="skill-category h2-responsive">Digital Marketing</h3>
										</MDBCol>
									</MDBRow>

									<MDBRow className="skill-list">
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_digital_marketing
												}}
											/>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow className="card-section-pad">
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={90}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h3 className="skill-category h2-responsive">Digital Analytics</h3>
										</MDBCol>
									</MDBRow>

									<MDBRow className="skill-list">
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_web_analytics_col_one
												}}
											/>
										</MDBCol>
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_web_analytics_col_two
												}}
											/>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow className="card-section-pad">
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={70}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h3 className="skill-category h2-responsive">Data Science</h3>
										</MDBCol>
									</MDBRow>

									<MDBRow className="skill-list">
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_data_science_col_one
												}}
											/>
										</MDBCol>
										<MDBCol md="6">
											<div
												dangerouslySetInnerHTML={{
													__html: this.state.about_skill_data_science_col_two
												}}
											/>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>

					<hr />

					<MDBRow>
						<MDBCol md="12">
							<h2 className="h2-responsive font-weight-normal">
								Education, Training, and Certifications
							</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow className="skill-list">
						<MDBCol md="12">
							<div dangerouslySetInnerHTML={{ __html: this.state.about_education }} />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<Link to={`/contact`}>
								<MDBBtn outline className="evro-navy-btn">
									Contact
								</MDBBtn>
							</Link>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default About;
