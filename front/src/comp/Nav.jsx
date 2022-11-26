import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Nav = () => {
	const { currentUser, logout } = useContext(AuthContext);

	return (
		<div className="navbar">
			<div className="container">
				<div className="space"></div>
				<div className="links">
					<Link className="link" to="/blog">
						<h4>Blog</h4>
					</Link>
					<span className="write">
						<Link className="link" to="/write">
							Write
						</Link>
					</span>
					<span>{currentUser?.username}</span>
					{currentUser ? (
						<span onClick={logout}>Logout</span>
					) : (
						<Link className="link" to="/login">
							User Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export default Nav;
