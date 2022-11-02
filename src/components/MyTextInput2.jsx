import React from "react";
import { useField } from "formik";

const MyTextInput2 = ({ children, label, type, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? <span>{meta.error}</span> : null}
		</>
	);
};

export default MyTextInput2;
