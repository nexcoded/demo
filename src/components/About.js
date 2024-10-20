import React from "react";
import { Link } from "react-router-dom";

import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faGraduationCap,
	faRibbon,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
	faTelegram,
	faYoutube,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import "./AboutStyle.css"

const stories = [
	{
		icon: faAward,
		title: "Top Rank On Fiverr",
	},
	{
		icon: faGraduationCap,
		title: "200+ 5 star Review",
	},
	{
		icon: faTrophy,
		title: "Top Rank on Dribbble",
	},
	{
		icon: faRibbon,
		title: "Top Seller on Upwork",
	},
];

const social = [
	{
		icon: faTelegram,
		link: "https://t.me/Apply_Nest",
	},
	{
		icon: faTwitter,
		link: "#",
	},
	{
		icon: faYoutube,
		link: "https://www.youtube.com/shorts/1aqTlXqfc28",
	},
	{
		icon: faLinkedinIn,
		link: "https://www.linkedin.com/in/amirhmalekijoo1990/",
	},
];

const StoryItem = ({ item }) => {
	const { title, icon } = item;
	return (
		<div className="d-flex align-items-center justify-content-center justify-content-md-start mt-5">
			<FontAwesomeIcon icon={icon} className="ezy__about17-icon me-3" />
			<h6 className="mb-0">{title}</h6>
		</div>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Social = ({ item }) => {
	const { link, icon } = item;
	return (
		<li>
			<a
				href={link}
				className="d-flex justify-content-center align-items-center social-link"
				style={{"margin-right": "25px", "list-style-type": "none"}}
				>
				<FontAwesomeIcon icon={icon} size="3x" />
			</a>
		</li>
	);
};

Social.propTypes = {
	item: PropTypes.object.isRequired,
};

const ShapeOne = () => (
	<>
		<svg
			className="ezy__about17-shape-one position-absolute"
			width="499"
			height="499"
			viewBox="0 0 600 600"
			fill="var(--ezy-body-color-invert)"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="249.5"
				cy="249.5"
				r="249.5"
				fill="var(--ezy-body-color-invert)"
				fillOpacity="1"
			/>
		</svg>
		<img
			src="https://cdn.easyfrontend.com/pictures/quiz_1.png"
			alt=""
			className="img-fluid"
		/>
	</>
);

const ShapeTwo = () => (
	<svg
		className="ezy__about17-shape-two position-absolute"
		width="134"
		height="133"
		viewBox="0 0 134 133"
		fill="var(--ezy-body-color-invert)"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M66.9999 133C104.003 133 134 103.227 134 66.5C134 29.773 104.003 0 66.9999 0C29.9968 0 0 29.773 0 66.5C0 103.227 29.9968 133 66.9999 133Z"
			fill="var(--ezy-body-color-invert)"
			fillOpacity="1"
		/>
	</svg>
);

const ShapeThree = () => (
	<svg
		className="ezy__about17-shape-three position-absolute"
		width="223"
		height="262"
		viewBox="0 0 223 262"
		fill="var(--ezy-body-color-invert)"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M212.555 100.254C224.477 169.763 239.522 246.47 170.132 258.373C100.741 270.275 36.3657 251.51 24.443 182C12.5203 112.491 -30.8157 14.839 38.5748 2.93669C107.965 -8.96565 200.632 30.7447 212.555 100.254Z"
			fill="var(--ezy-body-color-invert)"
			fillOpacity="0.8"
		/>
	</svg>
);

const ShapeFour = () => (
	<svg
		className="ezy__about17-shape-four position-absolute"
		width="155"
		height="166"
		viewBox="0 0 155 166"
		fill="var(--ezy-body-color-invert)"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M141.003 54.264C153.758 98.3055 169.054 146.771 125.088 159.504C81.1214 172.237 38.1659 164.793 25.4108 120.751C12.6556 76.7097 -22.4405 16.769 21.5258 4.03561C65.4921 -8.69781 128.248 10.2226 141.003 54.264Z"
			fill="var(--ezy-body-color-invert)"
			fillOpacity="0.8"
		/>
	</svg>
);

const About = () => {
	return (
		<section id="ezy__about17" className="ezy__about17 light">
			<ShapeThree />
			<ShapeFour />

			<Container>
				<Row className="justify-content-between">
					<Col xs={12} md={5}>
						<div className="position-relative">
							<ShapeOne />
							<ShapeTwo />
						</div>
					</Col>
					<Col xs={12} md={6} className="me-md-4">
						<div>
							<h2 className="ezy__about17-heading" style={{textAlign: 'right'}}> به‌ اپلای نست خوش آمدید </h2>
							<p className="ezy__about17-sub-heading my-4 pe-lg-5"  dir="rtl" style={{textAlign: 'justify'}}>
							خدمات حرفه‌ای و با کیفیت را در زمینه استخراج مقاله، نگارش مقالات علمی، تقویت رزومه و بهبود مهارت‌های زبانی برای دانشجویان و پژوهشگران فراهم می‌آوریم. هدف ما کمک به دانشجویان و محققان است تا با آماده‌سازی دقیق و حرفه‌ای، در فرایند اپلای به دانشگاه‌ها و موسسات بین‌المللی موفقیت کسب کنند. در اینجا به معرفی خدمات اصلی ما می‌پردازیم و نشان می‌دهیم که چگونه می‌توانیم در این مسیر همراه شما باشیم.

							</p>
							<div className="ezy__about17-cards">
								{stories.map((item, i) => (
									<StoryItem item={item} key={i} />
								))}
							</div>
						</div>
						<div className="d-flex mt-5">
							<Button variant="" className="ezy__about17-btn">
							<Link to="/AboutUs" style={{color: 'black', textDecoration: 'none' }}>
								 بیشتر
							</Link>
							</Button>
							<div className="d-flex ms-5">
								<Nav className="ezy__about17-social">
									{social.map((item, i) => (
										<Social item={item} key={i} />
									))}
								</Nav>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About