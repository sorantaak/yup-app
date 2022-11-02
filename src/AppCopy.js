import logo from "./logo.svg";
import "./App.css";
import { object, string } from "yup";

function AppCopy() {
	const validateData = async () => {
		let loginFormSchema = object({
			email: string().required(),
			password: string().required(),
		});
		try {
			await loginFormSchema.validate({}, { abortEarly: false });
		} catch (e) {
			console.log(e, e.errors);
		}
	};

	validateData();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default AppCopy;
