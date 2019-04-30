import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import ContactForm from './formContact';
import Typed from 'react-typed';
import Foot from './Foot';

import '../index.css';
import { ReactComponent as City } from '../assets/img/svg/dc-map.svg';

class ContactPage extends React.Component {
	render() {
		return (
			<div>
				<MDBContainer className="pt-5 pb-5">
					<MDBRow className="pb-3">
						<MDBCol md="12">
							<h1 className="h1">Want To Chat?</h1>
							<p className="lead">
								<Typed
									strings={[
										'Come say hello',
										'Ven a saludar',
										'Kom sê hallo',
										'Vieni a salutare',
										'Komm sag hallo',
										'Ελάτε να πείτε γεια',
										'E hele mai e aloha mai',
										'Dicere salve veni',
										'Venha dizer olá'
									]}
									typeSpeed={100}
									backSpeed={100}
									loop
								/>
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<p>
								<span>
									<strong>email:</strong>
								</span>{' '}
								<a className="evro-navy-font contact-link" href="mailto:erosa26@gmail.com">
									erosa26@gmail.com
								</a>
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<p>
								<span>
									<strong>phone:</strong>
								</span>{' '}
								<a className="evro-navy-font contact-link" href="tel:1-571-762-1956">
									571-762-1956
								</a>
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="pt-3">
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
				</MDBContainer>
				<div className="map-fit">
					<City className="dc-map" />
				</div>
				<MDBContainer className="pt-5 pb-5">
					<MDBRow>
						<MDBCol md="12">
							<h2>Ask me anything!</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<ContactForm />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ContactPage;
