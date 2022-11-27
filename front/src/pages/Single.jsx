import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencil,
	faTrash,
	faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();
	const navigate = useNavigate();

	const postId = location.pathname.split("/")[2]; // method to split text using / to reach post number. index starts from 0 so 2 selects post id

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		// function to allow useEffect to have async data
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/${postId}`);
				setPost(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${postId}`);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	// the moment plugin is used to created a posted date comparing the posted date distance from current date on line 37

	return (
		<div className="singlepost">
			<div className="content">
				<img src={`../upload/${post?.img}`} alt="" />
				<div className="user">
					{post.userImg && <img src={post.userImg} alt="" />}
					<div className="backbutton">
						<FontAwesomeIcon
							className="backarrow"
							icon={faCircleArrowLeft}
							onClick={() => {
								navigate(`/`);
							}}
						></FontAwesomeIcon>
					</div>
					<div className="info">
						<span>{post.username}</span>
						<p>Posted {moment(post.date).fromNow()}</p>
					</div>
					{currentUser.username === post.username && ( // this will only allow the user that created the post to see the delete and edit button
						<div className="edit">
							<Link to={`/write?edit=2`} state={post}>
								<FontAwesomeIcon className="awesomepencil" icon={faPencil} />
							</Link>
							<FontAwesomeIcon
								onClick={handleDelete}
								alt=""
								className="awesometrash"
								icon={faTrash}
							/>
						</div>
					)}
				</div>
				<h1>{post.title}</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(post.desc),
					}}
				></p>
			</div>
		</div>
	);
};
export default Single;
