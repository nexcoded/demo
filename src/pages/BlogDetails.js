import React from "react";
import { useParams } from 'react-router-dom';

import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import './Blog.css'



const blogDetailInfo = [
	{
		id: 1,
		avatarText: "orem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
		avatarDescription: "15 Jan 2022 in Design, Develop, Wordpress",
		avatarName: "George Codex",
		avatarTextDescription: "In et volutpat risus. Vestibulum at elementum nibh, at laoreet mauris. Ut eget mi in nisl rhoncus suscipit. Donec sed elementum dui. Sed tempus sagittis gravida. Etiam sit amet aliquam mauris, non sodales sapien. Curabitur non arcu dignissim, consectetur mi ut.",
		aboutusText: "Holisticly re-engineer long-term high-impact convergence via emerging bandwidth. Distinctively repurpose real-time opportunities without long-term high-impact potentialities. Interactively monetize corporate outsourcing before unique core competencies.", 

		comments: [
			{
				author: "George Codex",
				title: "Blue Seduction",
				link: "#",
			},
			{
				author: "Kontramax",
				title: "Sticky Post With Left Sidebar",
				link: "#",
			},
			{
				author: "Yann Yong",
				title: "Early stage disruptive",
				link: "#",
			}
		],
		relatedblogs: [
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
				title: "Decide what type of teacher you want to be",
				date: "Jun 29",
				link: "#",
			},
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
				title: "How I’m Styling Everyday Black Outfits",
				date: "Aug 15",
				link: "#",
			},
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png",
				title: "Long lasting fall scent for women sale offer",
				date: "Sep 17",
				link: "#",
			},
		],
	},


	{
		id: 2,
		avatarText: "  adipisicing elit. دومی Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
		avatarDescription: "15 Jan 202دومی dpress",
		avatarName: "George Codex",
		avatarTextDescription: "In et vol دومی ementum nibh, at laoreet mauris. Ut eget mi in nisl rhoncus suscipit. Donec sed elementum dui. Sed tempus sagittis gravida. Etiam sit amet aliquam mauris, non sodales sapien. Curabitur non arcu dignissim, consectetur mi ut.",
		aboutusText: "Holisticly re-eng٫﷼٬﷼٫ ۴   onvergence via emerging bandwidth. Distinctively repurpose real-time opportunities without long-term high-impact potentialities. Interactively monetize corporate outsourcing before unique core competencies.", 

		comments: [
			{
				author: "George Codex",
				title: "Blue Seduction",
				link: "#",
			},
			{
				author: "Kontramax",
				title: "Sticky Post With Left Sidebar",
				link: "#",
			},
			{
				author: "Yann Yong",
				title: "Early stage disruptive",
				link: "#",
			}
		],
		relatedblogs: [
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
				title: "Decide what type of teacher you want to be",
				date: "Jun 29",
				link: "#",
			},
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
				title: "How I’m Styling Everyday Black Outfits",
				date: "Aug 15",
				link: "#",
			},
			{
				img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png",
				title: "Long lasting fall scent for women sale offer",
				date: "Sep 17",
				link: "#",
			},
		],
	
	}



]


const BlogItem = ({ item }) => {
	const { img, title, link, date } = item;
	return (
	  <div className="mt-3">
		<div className="d-flex align-items-start">
		  <img src={img} alt={title} width="50" className="img-fluid me-3" />
		  <div>
			<a href={link}>
			  <h6>{title}</h6>
			</a>
			<p className="opacity-75">{date}</p>
		  </div>
		</div>
	  </div>
	);
  };



  const Comment = ({ item }) => {
	const { title, link, author } = item;
	return (
	  <li className="py-2">
		<FontAwesomeIcon icon={faComment} className="me-2" />
		{author} on
		<a href={link}>{title}</a>
	  </li>
	);
  };
  

  const Contents = ({ blog }) => {
	const { avatarText } = blog;
	return (
	  <div className="ezy__blogdetails4-contents">
		<img
		  src="https://cdn.easyfrontend.com/pictures/contact/contact13.jpg"
		  alt=""
		  className="ezy__blogdetails4-banner img-fluid"
		/>
		<p className="opacity-75 mt-5">
		  <span className="ezy__blogdetails4-highlighted-text">L</span>
		  {avatarText}
		</p>
		<Avatar blog={blog} />
	  </div>
	);
  };

  const SideBar = ({ blog }) => {
	const { aboutusText, comments, relatedblogs } = blog;
	return (
	  <div>
		<div>
		  <h4 className="ezy__blogdetails4-title">ABOUT US</h4>
		  <p className="opacity-75">{aboutusText}</p>
		</div>
		<div className="mt-5">
		  <h4 className="ezy__blogdetails4-title mb-4">RECENT COMMENTS</h4>
		  <div className="ezy__blogdetails4-comments p-4">
			<Nav>
			  {comments.map((item, i) => (
				<Comment item={item} key={i} />
			  ))}
			</Nav>
		  </div>
		</div>
		<div className="mt-5">
		  <h4 className="ezy__blogdetails4-title mb-4">RELATED POSTS</h4>
		  {relatedblogs.map((item, i) => (
			<BlogItem item={item} key={i} />
		  ))}
		</div>
	  </div>
	);
  };

  const Avatar = ({ blog }) => {
	const { avatarName, avatarDescription, avatarTextDescription } = blog;
	return (
	  <div className="ezy__blogdetails4-comment d-flex align-items-start p-4 p-md-5 mt-4 mt-md-5">
		<img
		  src="https://cdn.easyfrontend.com/pictures/users/user11.jpg"
		  alt=""
		  className="img-fluid rounded-circle"
		  width="70"
		/>
		<div className="ms-4">
		  <h5 className="ezy__blogdetails4-user mb-1">{avatarName}</h5>
		  <p className="opacity-75">{avatarDescription}</p>
		  <p className="opacity-75">{avatarTextDescription}</p>
		</div>
	  </div>
	);
  };

  const BlogDetails1 = () => {
	const { id } = useParams();
	const blog = blogDetailInfo.find(blog => blog.id === parseInt(id));
  
	if (!blog) {
	  return <div>Blog not found</div>;
	}
  
	return (
	  <section className="ezy__blogdetails4 dark">
		<Container>
		  <Row>
			<Col xs={12} md={4} lg={3} className="order-2 order-md-1">
			  <SideBar blog={blog} />
			</Col>
			<Col xs={12} md={8} lg={9} className="order-1 order-md-2">
			  <Contents blog={blog} />
			</Col>
		  </Row>
		</Container>
	  </section>
	);
  };


export default BlogDetails1