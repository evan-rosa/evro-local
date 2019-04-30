import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

import { ReactComponent as Sky } from '../assets/img/svg/dc-skyline.svg';

class HomePage extends React.Component {
	render() {
		return (
			<div className="height-inherit-vh parent-wrapper">
				<div className="content pt-5">
					<MDBContainer>
						<MDBRow>
							<MDBCol className="mobile-pad">
								<h1>Thank You!</h1>
								<p className="lead">
									I appreciate you taking the time to send me an email. I will reply to your message
									shortly. In the meantime, please feel free to learn more about me and my skillset.
								</p>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol>
								<a href="https://www.linkedin.com/in/evan-rosa/" target="_blank" className="li-ic mr-4">
									<MDBIcon size="2x" fab icon="linkedin-in" />
								</a>
								<a href="https://github.com/evan-rosa" target="_blank" className="git-ic mr-4">
									<MDBIcon size="2x" fab icon="github" />
								</a>
								<a
									href="https://stackoverflow.com/users/5672482/evro?tab=profile"
									target="_blank"
									className="so-ic mr-4"
								>
									<MDBIcon size="2x" fab icon="stack-overflow" />
								</a>
								<a href="https://evro-io.slack.com" target="_blank" className="slack-ic mr-4">
									<MDBIcon size="2x" fab icon="slack" />
								</a>
								<a href="https://www.instagram.com/_evro/" target="_blank" className="ins-ic mr-4">
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
				</div>

				<div className="child-wrapper">
					<Sky className="home-hero" />
				</div>
			</div>
		);
	}
}

export default HomePage;
