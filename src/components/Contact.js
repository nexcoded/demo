import axios from 'axios';
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import {
	faEnvelopeOpenText,
	faHome,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ContactStyle.css'

const contactInfoList = [
	// {
	// 	icon: faHome,
	// 	data: ["National Liberary", "Tehran, Iran"],
	// },
	{
		icon: faPhone,
		data: ["+989383211689", "+989358033939"],
	},
	{
		icon: faEnvelopeOpenText,
		data: ["amirhossein.maleki1990@gmail.com", "moein.khazaei@gmail.com"],
	},
];

const ContactForm = () => {
	const [validated, setValidated] = useState(false);
	const [formData, setFormData] = useState({
	  name: '',
	  phone: '',
	  email: '',
	  subject: '',
	  message: ''
	});

const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value
		});
	  };

	const handleSubmit = async (event) => {
		event.preventDefault();
	  
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
		  event.stopPropagation();
		} else {
			try {
				const response = await axios.post('http://localhost:5000/contact', formData);
			
				if (response.status === 200) {
				  console.log('Form submission successful');
				  setFormData({
					name: '',
					phone: '',
					email: '',
					subject: '',
					message: ''
				  });
				} else {
				  console.error('Form submission failed');
				}

			  } catch (error) {
				console.error('Error:', error);
			  }
		}
	  
		setValidated(true);
	  };

	return (
		<Form
			id="ezy__contact14-form"
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
		>
			<Row>
				<Col xs={12} md={6}>
					<Form.Group className="mb-3 mt-2">
						<Form.Control 
						  type="text" 
						  placeholder="Enter Your Name" 
						  name="name"
						  value={formData.name}
						  onChange={handleChange} />
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12} md={6}>
					<Form.Group className="mb-3 mt-2">
						<Form.Control
						type="email"
						placeholder="Your Email Address"
						name="email"
						value={formData.email}
						onChange={handleChange}
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12} md={6}>
					<Form.Group className="mb-3 mt-2">
						<Form.Control
						type="text"
						placeholder="Your Phone Number"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12} md={6}>
					<Form.Group className="mb-3 mt-2">
						<Form.Control
						type="text"
						placeholder="Subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							type="text"
							rows={3}
							placeholder="Enter Your Message"
							name="message"
							value={formData.message}
							onChange={handleChange}
						/>
						<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col xs={12}>
					<div className="mt-4 text-end text-md-start">
						<Button type="submit" variant="outline-light">GET IN TOUCH</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

const ContactInfo = ({ contactInfoList }) => (
	<address className="mt-5">
		<div>
			{contactInfoList.map((info, i) => (
				<div
					className="ezy__contact14-contact d-flex align-items-center"
					key={i}
				>
					<div className="ezy__contact14-contact-icon">
						<FontAwesomeIcon icon={info.icon} />
					</div>
					<div className="ezy__contact14-contact-details">
						{info.data.map((row, j) => (
							<p className="mb-0" key={j}>
								{row}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	</address>
);

ContactInfo.propTypes = {
	contactInfoList: PropTypes.array.isRequired,
};

const Contact = () => {
	return (
		<section className="ezy__contact14 light" id="ezy__contact14">
			<Container>
				<Row>
					<Col xs={12} className="text-center text-sm-start">
						<h2 className="ezy__contact14-heading mb-0">Stay In Touch</h2>
						<p className="ezy__contact14-sub-heading ms-sm-4">
							با ما در تماس باشید
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={5}>
						<ContactInfo contactInfoList={contactInfoList} />
					</Col>
					<Col xs={12} md={7} className="mt-5">
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact