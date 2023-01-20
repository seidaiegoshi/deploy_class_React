import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AlertButton from "./practice/AlertButton";
// import Form from "./practice/Form";

function App() {
	const name = "えごさん";

	return (
		<div>
			<AlertButton text="表示内容だよ">ボタンだよ</AlertButton>
			<AlertButton text="ボタン2の内容">ボタン2</AlertButton>
			<AlertButton text="ボタン3の内容">ボタン3</AlertButton>
		</div>
	);
}

export default App;
