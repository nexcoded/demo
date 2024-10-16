import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import './ComingSoonStyle.css'

const SubscribeForm = () => (
	<Form className="ezy__comingsoon12-subscription-form mt-4 me-md-5">
		<InputGroup className="ezy__comingsoon12-input-group">
			<input
				name="email"
				id="ezy__comingsoon12-subscription-email"
				className="form-control border-0"
				type="email"
				placeholder="Enter email"
				required
			/>
			<Button variant="primary" className="ezy__comingsoon12-btn px-5">
				Notify Us
			</Button>
		</InputGroup>
	</Form>
);

const ComingSoon = () => {
	return (
		<section className="ezy__comingsoon12 light">
			<div className="ezy__comingsoon12-banner">
				<div className="ezy__comingsoon12-overlay" />
			</div>

			<Container>
				<Row className="justify-content-between">
					<Col xs={12} md={8} lg={6} xl={5}>
						<div>
							<h2 className="ezy__comingsoon12-heading mb-4">Coming Soon</h2>
							<p className="ezy__comingsoon12-sub-heading mb-0">
								Our website is currently undergoing scheduled maintainance. We
								will be back shortly. Thank you for your patience.
							</p>

							{/* <SubscribeForm /> */}
                            

							{/* <p className="mt-3 mb-0 opacity-75">
								<em>
									Sign Up Now to get early notification of our launch date
								</em>
							</p> */}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComingSoon