/**
 * @setTimeout
 */
// console.log('One');

// setTimeout((): void => {
// 	console.log('Two');
// }, 3000);

// console.log('Three');

/**
 * @Promise
 */
// const condition = true;

// const promise = new Promise((resolve, reject) => {
// 	if (condition) {
// 		resolve('Success');
// 	} else {
// 		reject(new Error('Error'));
// 	}
// });

// promise
// 	.then((resolveData): void => {
// 		console.log(resolveData);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/**
 * @Promise_Practice
 */
// const restaurant = (callback: () => void, time: number) => {
// 	setTimeout(callback, time);
// };

// const order = (): Promise<string> => {
// 	return new Promise((resolve, reject) => {
// 		restaurant(() => {
// 			console.log('... 음식 주문 ...');
// 			resolve('음식 주문 시작');
// 		}, 1000);
// 	});
// };

// const cook = (progress: string): Promise<string> => {
// 	return new Promise((resolve, reject) => {
// 		console.log('... 음식 조리 ...');
// 		restaurant(() => {
// 			resolve(`${progress} -> 음식 조리중 `);
// 		}, 2000);
// 	});
// };

// const serving = (progress: string): Promise<string> => {
// 	return new Promise((resolve, reject) => {
// 		console.log('... 음식 서빙 ...');
// 		restaurant(() => {
// 			resolve(`${progress} -> 음식 서빙중 `);
// 		}, 3000);
// 	});
// };

// const eat = (progress: string): Promise<string> => {
// 	return new Promise((resolve, reject) => {
// 		console.log('... 음식 먹기 ...');
// 		restaurant(() => {
// 			resolve(`${progress} -> 음식 먹는중 `);
// 		}, 4000);
// 	});
// };

// order()
// 	.then((progress) => cook(progress))
// 	.then((progress) => serving(progress))
// 	.then((progress) => eat(progress))
// 	.then((progress) => console.log(progress))
// 	.catch((err) => console.log(err));

/**
 * @Promise_Resolve
 */
// Promise.resolve(123)
// 	.then((res) => {
// 		throw new Error('Error !');
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		return Promise.resolve(402);
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

/**
 * @Async_Await
 */
// Promise의 예시
const asyncFunc1 = (msg: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`asyncFunc1 - ${msg}`);
		}, 1000);
	});
};

const asyncFunc2 = (msg: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`asyncFunc2 - ${msg}`);
		}, 1500);
	});
};

// Promise main
const promiseMain1 = (): void => {
	asyncFunc1('hi')
		.then((result: string) => {
			console.log(result);
			return asyncFunc2('hello');
		})
		.then((result: string) => {
			console.log(result);
		})
		.catch((err) => console.log(err.message));
};

// promiseMain1();

// async, await 사용
const asyncMain = async (): Promise<void> => {
	let result = await asyncFunc1('hi');
	console.log(result);
	result = await asyncFunc2('sehoon');
	console.log(result);
};

void asyncMain();
