import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Menu from "../comp/Menu";

const Singlepost = () => {
	return (
		<div className="singlepost">
			<div className="content">
				<img src="qweqwe" alt="img" />
				<div className="user">
					{/* <img src="img" alt="img" /> */}
					<div className="info">
						<span>mike</span>
						<p>Posted 1 day ago</p>
					</div>
					<div className="edit">
						<Link to={`/write?edit=2`}>
							<FontAwesomeIcon className="awesomepencil" icon={faPencil} />
						</Link>
						<FontAwesomeIcon className="awesometrash" icon={faTrash} />
					</div>
				</div>
				<h1>
					Lorem ipsum random text because I was too lazy to go to the ipsum
					generate and also cant remeber the shorthand command!
				</h1>
				<p>
					We've updated many of our icon names in Version 6 to make them more
					universal and consistent. But we wanted to make sure not to break your
					existing code, so we made aliases for renamed icons to allow them to
					work with either the old or new names. And you can use the old or new
					name for styles as well. So you can still use fas, far, fal, fad, and
					fab. And we've also included older prefix versions for our new Thin
					style (fat) and new Sharp family of styles (Sharp solid is fass).
				</p>
			</div>
			{/* <Menu /> */}
		</div>
	);
};
export default Singlepost;
