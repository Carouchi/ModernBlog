import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="space"></div>
				<div className="links">
					<Link className="link" to="/blog">
						<h4>Blog</h4>
					</Link>
					<Link className="link" to="/blo">
						<h4>Blog</h4>
					</Link>
					<span>Logout</span>
					<span className="write">
						<Link className="link" to="/write">
							Write
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Nav;
