import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.desc || "");
	const [title, setTitle] = useState(state?.title || "");
	const [file, setFile] = useState(null);
	const [cat] = useState(state?.cat || "");

	const navigate = useNavigate();

	const handleClick = async (e) => {
		e.preventDefault();
		const imgUrl = await upload();

		try {
			state
				? await axios.put(`/posts/${state.id}`, {
						// checks to see if already a post, this enables edit rather than fresh post, bringing in data
						title,
						desc: value,
						cat,
						img: file ? imgUrl : "",
				  })
				: await axios.post(`/posts/`, {
						title,
						desc: value,
						cat,
						img: file ? imgUrl : "",
						date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
				  });
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/upload", formData);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="addwrite">
			<div className="content">
				<div className="backbutton">
					<FontAwesomeIcon
						className="backarrow"
						icon={faCircleArrowLeft}
						onClick={() => {
							navigate(`/`);
						}}
					></FontAwesomeIcon>
				</div>
				<input
					type="text"
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Select post image & publish</h1>
					<input
						style={{ display: "none" }}
						type="file"
						id="file"
						name=""
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<label className="filelabel" htmlFor="file">
						Upload Image
					</label>
					<div className="buttons">
						<button className="update" onClick={handleClick}>
							Publish Post
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Write;
