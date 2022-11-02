import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import { useState } from "react";

function AppWithYup() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});

	const submitHandler = async (e) => {
		e.preventDefault();
		let formSchema = yup.object({
			email: yup.string().required().email(),
			password: yup.string().required().min(8),
		});
		try {
			await formSchema.validate(form, { abortEarly: false });
		} catch (error) {
			let allErrors = {};
			error.inner.forEach((err) => {
				allErrors[err.path] = err.message;
				console.log(err.path, err.message);
			});
			setErrors(allErrors);
		}
	};

	const onChangeInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
		console.log(form);
	};
	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<label htmlFor="">Email</label>
				<input
					type="text"
					name="email"
					value={form.email}
					onChange={onChangeInput}
				/>
				{errors.email ? <span>{errors.email}</span> : null}
				<br />
				<label htmlFor="">Password</label>
				<input
					type="text"
					name="password"
					value={form.password}
					onChange={onChangeInput}
				/>
				{errors.password ? <span>{errors.password}</span> : null}
				<br />
				<button type="submit">submit</button>
			</form>
		</div>
	);
}

export default AppWithYup;
