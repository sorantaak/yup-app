import { ErrorMessage, Field, Form, Formik } from "formik";
import MyTextInput from "./components/MyTextInput";
import "./App.css";
import MyTextInput2 from "./components/MyTextInput2";
import * as yup from "yup";
function App() {
	// const formik = useFormik({
	// 	initialValues: {
	// 		name: "",
	// 		username: "",
	// 		email: "",
	// 		password: "",
	// 	},
	// 	validate: (values) => {
	// 		let errors = {};
	// 		if (values.name === "") {
	// 			errors.name = "the name field is requierd";
	// 		} else if (values.name.length < 5) {
	// 			errors.name = "the name field must be gt 5 char";
	// 		}
	// 		if (values.email === "") {
	// 			errors.email = "the email field is requierd";
	// 		} else if (
	// 			!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
	// 		) {
	// 			errors.email = "the email field must be email format";
	// 		}
	// 		if (values.username === "") {
	// 			errors.username = "the username field is requierd";
	// 		}
	// 		if (values.password === "") {
	// 			errors.password = "the password field is requierd";
	// 		}
	// 		console.log(errors);
	// 		return errors;
	// 	},
	// 	onSubmit: (values) => {
	// 		console.log(JSON.stringify(values));
	// 	},
	// });

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("submit form");
	// };
	let registerForSchema = yup.object().shape({
		name: yup.string().required().min(3),
		username: yup.string().required().min(6),
		email: yup.string().required().email(),
		password: yup.string().required().min(8),
		about: yup.string().required(),
		type: yup
			.string()
			.required()
			.matches(/(admin|user)/),
		role: yup.boolean().required(),
	});

	const submitHandler = (values) => {
		console.log(values);
	};
	return (
		<div className="App">
			<Formik
				initialValues={{
					name: "",
					username: "",
					email: "",
					password: "",
					about: "",
					type: "admin",
					role: false,
				}}
				onSubmit={submitHandler}
				validationSchema={registerForSchema}
			>
				<Form>
					<div>
						{/* <label>Your Name</label>
						<Field type="text" name="name" />
						<ErrorMessage name="name" /> */}
						<MyTextInput name="name" placeholder="enter name" />
						{/* {formik.touched.name && formik.errors.name ? (
							<span>{formik.errors.name}</span>
						) : null} */}
					</div>
					<div>
						{/* <label>User Name</label>
						<Field type="text" name="username" />
						<ErrorMessage name="username" /> */}
						<MyTextInput2 type="text" name="username" placeholder="username" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.username && formik.errors.username ? (
							<span>{formik.errors.username}</span>
						) : null} */}
					</div>
					<div>
						<label>Email Address</label>
						<Field type="text" name="email" />
						<ErrorMessage name="email" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.email && formik.errors.email ? (
							<span>{formik.errors.email}</span>
						) : null} */}
					</div>
					<div>
						<label>Pssword</label>
						<Field type="text" name="password" />
						<ErrorMessage name="password" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.password && formik.errors.password ? (
							<span>{formik.errors.password}</span>
						) : null} */}
					</div>
					<div>
						<label>About me</label>
						<Field as="textarea" name="about" />
						<ErrorMessage name="about" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.password && formik.errors.password ? (
							<span>{formik.errors.password}</span>
						) : null} */}
					</div>
					<div>
						<label>user type</label>
						<Field as="select" name="type">
							<option value="normal">Normal</option>
							<option value="admin">Admin</option>
							<option value="user">User</option>
						</Field>
						<ErrorMessage name="type" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.password && formik.errors.password ? (
							<span>{formik.errors.password}</span>
						) : null} */}
					</div>
					<div>
						<label>Role</label>
						<Field type="checkbox" name="role" />

						<ErrorMessage name="role" />
						{/* {formik.touched.name && formik.err
						{/* {formik.touched.password && formik.errors.password ? (
							<span>{formik.errors.password}</span>
						) : null} */}
					</div>

					<button type="submit">send</button>
				</Form>
			</Formik>
		</div>
	);
}

export default App;
