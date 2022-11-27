import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "../comp/Nav";

const Home = () => {
	const [posts, setPosts] = useState([]);

	const cat = useLocation().search;

	useEffect(() => {
		// function to allow useEffect to have async data
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${cat}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [cat]);

	const getText = (html) => {
		// removes html tags like <p></p>
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<div className="home">
			<Nav />
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={`../upload/${post.img}`} alt="" />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{getText(post.desc)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
