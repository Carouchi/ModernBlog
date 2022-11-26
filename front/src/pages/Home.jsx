import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// function to allow useEffect to have async data
		const fetchData = async () => {
			try {
				const res = await axios.get("/posts");
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);
	// const posts = [
	// 	{
	// 		id: 1,
	// 		title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
	// 		desc: "Lorem ipsum dolor",
	// 		img: "front/src/pics/cup.png",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
	// 		desc: "Lorem ipsum dolor",
	// 		img: "https://images.pexels.com/photos/70008010/peg?auto=compress&cs=tomysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
	// 		desc: "Lorem ipsum dolor",
	// 		img: "https://images.pexels.com/photos/70008010/peg?auto=compress&cs=tomysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
	// 		desc: "Lorem ipsum dolor",
	// 		img: "https://images.pexels.com/photos/70008010/peg?auto=compress&cs=tomysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
	// 		desc: "Lorem ipsum dolor",
	// 		img: "https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
	// 	},
	// ];

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={post.img} alt="" />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>Read More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
