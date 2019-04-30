import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

import '../index.css';

class Footer extends React.Component {
	render() {
		return (
			<MDBFooter className="font-small pt-4 mt-4 evro-navy-back">
				<div className="footer-copyright text-center py-3">
					<MDBContainer fluid>
						&copy; {new Date().getFullYear()} Copyright: EvRo.io is created with{' '}
						<a href="https://www.djangoproject.com/" target="_blank">
							Djangoproject.com
						</a>,{' '}
						<a href="https://www.django-rest-framework.org/" target="_blank">
							Django-Rest-Framework.org
						</a>,{' '}
						<a href="https://wagtail.io/" target="_blank">
							Wagtail.io
						</a>,
						<a href="https://www.MDBootstrap.com" target="_blank">
							{' '}
							MDBootstrap.com{' '}
						</a>, and
						<a href="https://reactjs.org/" target="_blank">
							{' '}
							Reactjs.org{' '}
						</a>
					</MDBContainer>
				</div>
			</MDBFooter>
		);
	}
}

export default Footer;
