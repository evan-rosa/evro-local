import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

import '../index.css';

import axios from 'axios';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleFormSubmit = (event) => {
		event.preventDefault();
		event.target.className += ' was-validated';
		const name = event.target.elements.name.value;
		const email = event.target.elements.email.value;
		const subject = event.target.elements.subject.value;
		const message = event.target.elements.message.value;

		axios
			.post(`http://127.0.0.1:8000/api/contact/`, {
				name: name,
				email: email,
				subject: subject,
				message: message
			})
			.then((res) => {
				console.log(res);
				console.log(name, email, subject, message);
				window.location = '/thank-you';
			})
			.catch((error) => console.err(error));
		this.setState({ name: '', email: '', subject: '', message: '' }); // Reset form
	};
	render() {
		return (
			<div>
				<form onSubmit={(event) => this.handleFormSubmit(event)} className="needs-validation" noValidate>
					<MDBRow>
						<MDBCol md="12">
							<div className="md-form mb-0">
								<MDBInput
									required
									name="name"
									type="text"
									id="contact-name"
									label="Your name"
									onChange={this.handleChange}
								/>
							</div>
							<div className="md-form mb-0">
								<MDBInput
									required
									name="email"
									type="email"
									id="contact-email"
									label="Your email"
									onChange={this.handleChange}
								/>
							</div>
							<div className="md-form mb-0">
								<MDBInput
									required
									name="subject"
									type="text"
									id="contact-text"
									label="Subject Line"
									onChange={this.handleChange}
								/>
							</div>
							<div className="md-form mb-0">
								<MDBInput
									required
									name="message"
									type="textarea"
									id="contact-message"
									label="Your message"
									onChange={this.handleChange}
								/>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBBtn outline size="md" type="submit" className="btn-block z-depth-2 evro-navy-btn">
						Send
					</MDBBtn>
				</form>
			</div>
		);
	}
}

export default ContactForm;
