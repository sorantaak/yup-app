import React from "react";
import { Field, ErrorMessage } from "formik";

const MyTextInput = ({ children, label, type, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Field type={type} {...props} />
			<ErrorMessage name={props.name} />
		</>
	);
};

export default MyTextInput;
