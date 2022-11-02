import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setLocale } from "yup";

const root = ReactDOM.createRoot(document.getElementById("root"));

setLocale({
	mixed: {
		required: ({ path }) => `فیلد ${path} الزامی است`,
	},
	string: {
		min: ({ path, min }) => `حداقل طول فیلد ${path} ${min} کاراکتر می باشد`,
		email: ({ path }) => `ایمیل صحیح نیست`,
	},
});
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
