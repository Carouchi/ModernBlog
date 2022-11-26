import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
	const [value, setValue] = useState("");

	console.log(value);

	return (
		<div className="addwrite">
			<div className="content">
				<input type="text" placeholder="title" />
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
					<h1>Publish Post</h1>
					<span>
						<b>Post Status: </b> Draft
					</span>
					<span>
						<b>Privacy: </b> Public
					</span>
					<input style={{ display: "none" }} type="file" id="file" name="" />
					<label className="filelabel" htmlFor="file">
						Upload Image
					</label>
					<div className="buttons">
						<button className="draft">Save as draft</button>
						<button className="update">Update Post</button>
					</div>
				</div>
				{/* <div className="item">
					<h1>Category</h1>
					<input type="radio" name="cat" value="art" id="art" />
					<label htmlFor="art">Art</label>
				</div> */}
			</div>
		</div>
	);
};
export default Write;
