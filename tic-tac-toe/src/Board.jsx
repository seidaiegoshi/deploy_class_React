import Square from "./Square";
import "./App.css";

const Board = (props) => {
	return (
		<div>
			<div className="board">
				{props.history.map((val, index) => (
					<Square key={index} value={val} onClick={() => props.onClick(index)} />
				))}
			</div>
		</div>
	);
};

export default Board;
