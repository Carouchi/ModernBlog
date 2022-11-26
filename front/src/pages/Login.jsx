import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const [err, setError] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			await axios.post("/auth/login", inputs);
			navigate("/");
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input
					required
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
				/>
				<input
					required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Login</button>
				{err && <p>{err}</p>}
				<span>
					<Link to="/register">Register Here!</Link>
				</span>
			</form>
		</div>
	);
};
export default Login;
