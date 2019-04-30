import React from 'react';
import { Link } from 'react-router-dom';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardText,
	MDBBtn,
	MDBView,
	MDBMask
} from 'mdbreact';

import '../index.css';

const ProjectList = (props) => {
	let data = props.data;
	return (
		<MDBContainer className="pb-3">
			<MDBRow className="text-center">
				{data.map((data) => (
					<MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
						<section key={data.id}>
							<MDBCard cascade wide>
								<MDBView cascade overlay>
									<MDBCardImage top src={data.project_image_url.url} alt="" className="img-fluid" />
									<a href={`/projects/${data.id}`}>
										<MDBMask overlay="white-slight" />
									</a>
								</MDBView>

								<MDBCardBody className="pb-3" cascade>
									<h2 className="font-weight-bold my-3">{data.project_h_one}</h2>

									<MDBCardText>{data.project_h_two}</MDBCardText>
									<Link to={`/projects/${data.id}`}>
										<MDBBtn outline className="evro-navy-btn">
											View Project Details
										</MDBBtn>
									</Link>
								</MDBCardBody>
							</MDBCard>
						</section>
					</MDBCol>
				))}
			</MDBRow>
		</MDBContainer>
	);
};

export default ProjectList;
