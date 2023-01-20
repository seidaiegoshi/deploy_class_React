import TextInput from "./TextInput";

const Form = () => {
	return (
		<>
			<TextInput label="姓" required={true} />
			<TextInput label="名" required={true} />
			<TextInput label="電話番号" required={true} />
			<TextInput label="住所" required={true} />
		</>
	);
};

export default Form;
