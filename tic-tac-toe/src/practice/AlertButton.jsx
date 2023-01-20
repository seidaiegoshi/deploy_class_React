const AlertButton = (props) => {
	const handleClick = () => alert(props.text);
	return <button onClick={handleClick}>{props.children}</button>;
};

export default AlertButton;
