import React from "react";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faTwitterSquare,
	faYoutube,
	faFacebookSquare,
	faPinterest,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

import './FooterStyle.css'

const quickLinks = [
	{ value: "Terms & Conditions", href: "#!" },
	{ value: "Privacy Policy", href: "#!" },
	{ value: "Refund Policy", href: "#!" },
];

const socialMedia = [
	{ value: "Facebook", href: "#!" },
	{ value: "Instagram", href: "#!" },
	{ value: "LinkedIn", href: "#!" },
	{ value: "Twitter", href: "#!" },
];

const jobInfo = [
	{ value: "Select", href: "#!" },
	{ value: "Service", href: "#!" },
	{ value: "Payment", href: "#!" },
];

const language = [
	{
		value: "en",
		text: "English",
	},
	{
		value: "bn",
		text: "Bangla",
	},
];

const sociaIcons = [
	{
		icon: faLinkedin,
		href: "#!",
	},
	{
		icon: faTwitterSquare,
		href: "#!",
	},
	{
		icon: faYoutube,
		href: "#!",
	},
	{
		icon: faFacebookSquare,
		href: "#!",
	},
	{
		icon: faPinterest,
		href: "#!",
	},
	{
		icon: faWordpress,
		href: "#!",
	},
];

const QuickLinks = ({ qLink }) => (
	<li>
		<a href={qLink.href}>{qLink.value}</a>
	</li>
);
QuickLinks.propTypes = {
	qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
	<li>
		<a href={media.href}>{media.value}</a>
	</li>
);
SocialMedia.propTypes = {
	media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
	<li>
		<a href={job.href}>{job.value}</a>
	</li>
);
JobInfo.propTypes = {
	job: PropTypes.object.isRequired,
};

const LanguageItem = ({ language }) => (
	<option value={language.value}>{language.text}</option>
);
LanguageItem.propTypes = {
	language: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
	<a className="ms-2" href={item.href}>
		{item.value}
	</a>
);

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
	<li>
		<a href={social.href}>
			<FontAwesomeIcon icon={social.icon} />
		</a>
	</li>
);

SocialItem.propTypes = {
	social: PropTypes.object.isRequired,
};

const Footer = () => {
	return (
		<div className="ezy__footer6 light">
			<Container>
				<Row className="text-center text-sm-start">
					<Col lg={3} className="mt-4 mt-lg-0">
						<img
							src="https://cdn.easyfrontend.com/pictures/footers/logo.png"
							height="50"
							alt=""
						/>
					</Col>
					<Col lg={9}>
						<Row>
							<Col sm={4} className="mt-4 mt-lg-0">
								<h5>Quick Links</h5>
								<Nav className="flex-column ezy__footer6-quick-links">
									{quickLinks.map((qLink, i) => (
										<QuickLinks qLink={qLink} key={i} />
									))}
								</Nav>
							</Col>
							<Col sm={4} className="mt-4 mt-lg-0">
								<h5>Social Media</h5>
								<Nav className="flex-column ezy__footer6-quick-links">
									{socialMedia.map((media, i) => (
										<SocialMedia media={media} key={i} />
									))}
								</Nav>
							</Col>
							<Col sm={4} className="mt-4 mt-lg-0">
								<h5>Job Info</h5>
								<Nav className="flex-column ezy__footer6-quick-links">
									{jobInfo.map((job, i) => (
										<JobInfo job={job} key={i} />
									))}
								</Nav>
							</Col>
						</Row>

						<div className="d-inline-flex align-items-center mt-3">
							<Form.Label htmlFor="ezy__footer6-language">Language:</Form.Label>
							<Form.Select
								name="language"
								id="ezy__footer6-language"
								className="ezy__footer6-language border-0 bg-transparent"
							>
								{language.map((language, i) => (
									<LanguageItem language={language} key={i} />
								))}
							</Form.Select>
						</div>
						<div>
							<Nav className="ezy__footer6-social d-inline-flex mt-2">
								{sociaIcons.map((social, i) => (
									<SocialItem social={social} key={i} />
								))}
							</Nav>
						</div>
						<div className="mt-3 opacity-50 ezy__footer6-copyright">
							<span>Copyright &copy; Easy Frontend, All rights reserved</span>
							{quickLinks.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer