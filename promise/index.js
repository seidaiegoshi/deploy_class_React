// 指定した3秒経過するまで無限ループを実行し、同期的にブロックする関数
const blockTime = () => {
	const startTime = Date.now();
	while (true) {
		const diffTime = Date.now() - startTime;
		if (diffTime >= 3000) {
			return; // 指定時間経過したら関数の実行を終了
		}
	}
};

// // 同期処理
// console.log("1.処理を開始");
// console.log("2.処理をブロック");
// blockTime(); // つぎの処理を3秒間ブロックする
// console.log("3.処理を再開");
// console.log("4.こんにちは世界");

// 非同期処理
// console.log("1", "処理を開始");
// console.log("2", "2秒待機");
// setTimeout(() => {
// 	console.log("3", "処理をブロック");
// 	blockTime(); // つぎの処理を3秒間ブロックする
// 	console.log("4", "処理を再開");
// }, 2000);
// // ブロックする処理は非同期なタイミングで呼び出されるので、次の行が先に実行される
// console.log("5", "こんにちは世界");

// 順番道理に動かしてみる。
// const promise = new Promise((resolve) => {
// 	setTimeout(() => {
// 		console.log("3", "処理をブロック");
// 		blockTime(); // つぎの処理を3秒間ブロックする
// 		console.log("4", "処理を再開");
// 		resolve("resolveした");
// 	}, 2000);
// });

// console.log("1", "処理を開始");
// console.log("2", "2秒待機");
// promise.then((data) => {
// 	console.log("5", "こんにちは世界");
// 	console.log(data);
// });

// Promise
// const result = new Promise((resolve, reject) => {
// 非同期の処理が成功したときはresolveを呼ぶ
// 非同期の処理が失敗したときはrejectを呼ぶ
// });

// const promiseExample = (value) => {
// 	return new Promise((resolve, reject) => {
// 		value === "success" ? resolve() : reject();
// 	});
// };

// promiseExample("success")
// 	.then(() => {
// 		console.log("resolveしたよ");
// 	})
// 	.catch(() => {
// 		// この行は実行されない
// 		console.log("rejectしたよ");
// 	});

// promiseExample("hoge")
// 	.then(() => {
// 		// この行は実行されない
// 		console.log("resolveしたよ");
// 	})
// 	.catch(() => {
// 		console.log("rejectしたよ");
// 	});

// aysnc await
// const asyncExample = async (value) => {
// 	if (value === "success") {
// 		console.log("resolve");
// 		return "success";
// 	} else {
// 		console.log("reject");
// 		// 例外（エラー）を意図的に発生させる
// 		throw new Error("error");
// 	}
// };

// asyncExample("success")
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((e) => {
// 		// この行は実行されない
// 		console.log(e);
// 	});

// asyncExample("hoge")
// 	.then((data) => {
// 		// この行は実行されない
// 		console.log(data);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// const asyncExample2 = (value) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			value === "success" ? resolve("success!!!!") : reject(new Error("error"));
// 		}, 2000);
// 	});
// };

// const doAsyncExample2 = async (value) => {
// 	console.log("処理を開始");
// 	const hoge = await asyncExample2(value);
// 	console.log(hoge);
// 	console.log("処理を終了");
// };

// doAsyncExample2("success");

// // 例外処理
// const doAsyncExampleException = async () => {
//   try {
//     console.log("処理を開始");
//     const success = await asyncExample2("success");
//     console.log(success);

//     // rejectが呼ばれる
//     const hoge = await asyncExample2("hoge");
//     // 以下の行は実行されない
//     console.log(hoge);
//     console.log("処理を終了");
//   } catch (e) {
//     console.log(e);
//   }
// };

// doAsyncExampleException();

try {
	console.log("try節:この行は実行されます");
	// 未定義の関数を呼び出してReferenceError例外が発生する
	undefinedFunction();
	// 例外が発生したため、この行は実行されません
	console.log("hoge");
} catch (error) {
	// 例外が発生したあとはこのブロックが実行される
	console.log("catch節:この行は実行されます");
	console.log(error.message); // => "undefinedFunction is not defined"
} finally {
	// このブロックは例外の発生に関係なく必ず実行される
	console.log("finally節:この行は実行されます");
}
