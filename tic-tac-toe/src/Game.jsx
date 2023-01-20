import Board from "./Board";
import "./App.css";
import { useState } from "react";

const Game = () => {
	const [history, setHistory] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState(null);

	const status = winner ? `winner : ${winner}` : `Next player:${xIsNext ? "X" : "O"}`;

	const handleClick = (boardNumber) => {
		const newHistory = [...history];

		if (winner || newHistory[boardNumber]) {
			return;
		}

		newHistory[boardNumber] = xIsNext ? "X" : "O";

		setHistory(newHistory);
		setXIsNext(!xIsNext);
		setWinner(calculateWinner(newHistory));
	};

	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		// 勝者がいたら、returnがはいる。いなければnullが入る。
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}

		return null;
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board onClick={handleClick} history={history} />
			</div>
			<div className="game-info">
				<div>{status}</div>
			</div>
		</div>
	);
};

export default Game;
