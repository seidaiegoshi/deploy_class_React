const TextInput = (props) => {
	console.log(props);
	return (
		<div>
			<div>
				<span>{props.label}</span>
				{props.required && <span>*</span>}
			</div>
			<input type="text" />
		</div>
	);
};

export default TextInput;
