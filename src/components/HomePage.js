import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import FeatureForm from './formFeature';

import { ReactComponent as Sky } from '../assets/img/svg/dc-skyline.svg';

import axios from 'axios';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: [],
			h_one: [],
			h_one_span: [],
			content: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `https://evro.herokuapp.com/api/v2/pages/?type=home.HomePage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				const home = res.data.items.map((obj) => obj);
				this.setState({
					id: res.data.items[0].id,
					h_one: res.data.items[0].h_one,
					h_one_span: res.data.items[0].h_one_span,
					content: res.data.items[0].content
				});
			})
			.catch((error) => this.setState({ error }));
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div className="height-inherit-vh parent-wrapper">
				<div className="content pt-5">
					<MDBContainer>
						<MDBRow className="bring-to-front">
							<MDBCol md="7" lg="8" className="mobile-pad">
								<MDBContainer>
									<MDBRow className="pb-3">
										<MDBCol>
											<h1 className="h1">
												<strong>
													{this.state.h_one}
													<span className="evro-red-font"> {this.state.h_one_span}</span>
												</strong>
											</h1>
											<h2 className="h5-responsive line-height">{this.state.content}</h2>
										</MDBCol>
									</MDBRow>
									<MDBRow>
										<MDBCol>
											<a
												href="https://www.linkedin.com/in/evan-rosa/"
												target="_blank"
												className="li-ic mr-4"
											>
												<MDBIcon size="2x" fab icon="linkedin-in" />
											</a>
											<a
												href="https://github.com/evan-rosa"
												target="_blank"
												className="git-ic mr-4"
											>
												<MDBIcon size="2x" fab icon="github" />
											</a>
											<a
												href="https://stackoverflow.com/users/5672482/evro?tab=profile"
												target="_blank"
												className="so-ic mr-4"
											>
												<MDBIcon size="2x" fab icon="stack-overflow" />
											</a>
											<a
												href="https://evro-io.slack.com"
												target="_blank"
												className="slack-ic mr-4"
											>
												<MDBIcon size="2x" fab icon="slack" />
											</a>
											<a
												href="https://www.instagram.com/_evro/"
												target="_blank"
												className="ins-ic mr-4"
											>
												<MDBIcon size="2x" fab icon="instagram" />
											</a>
										</MDBCol>
									</MDBRow>
									<MDBRow>
										<MDBCol>
											<Link to={`/about`}>
												<MDBBtn outline className="evro-navy-btn">
													Learn More
												</MDBBtn>
											</Link>
										</MDBCol>
									</MDBRow>
								</MDBContainer>
							</MDBCol>
							<MDBCol md="5" lg="4" className="mb-4">
								<FeatureForm />
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>

				<div className="child-wrapper">
					<Sky className="home-hero" />
				</div>
			</div>
		);
	}
}

export default HomePage;
