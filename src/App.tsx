import React, { MouseEvent } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
	// const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Hello Im Vasya!')
	// }
	// const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Hello Im Ivan!')
	// }

	// const onClickHandler = (name: string) => {
	// 	console.log(name)
	// }
	// const foo1 = () => {
	// 	console.log(100200)
	// }

	// const foo2 = (ch: number) => {
	// 	return console.log(ch)
	// }

	const Button1Foo = (subscriber: string, age: number, city: string) => {
		console.log(subscriber, age, city)
	}

	const Button2Foo = (subscriber: string) => {
		console.log(subscriber)
	}

	const Button3Foo = () => {
		console.log('TestBtn')
	}

	return (

		<div className="App">
			{/* <button onClick={() => {
				console.log('Hello')
			}}>пфпфпфпфп</button> */}
			{/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('vasya')}>пфпфпфпфп</button>
			<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('serg')}>пфпфпфпфп</button>
			<button onClick={() => onClickHandler('gaggagag')}>пфпфпфпфп</button> */}

			{/* <button onClick={foo1}>1</button>
			<button onClick={() => { foo2(100200) }}>2</button> */}

			<Button name={'Subscribe-1'} callBack={() => Button1Foo('Im Vasya', 20, 'Moscow')} />
			<Button name={'Subscribe-2'} callBack={() => Button2Foo('Im Ivan')} />
			<Button name={'Subscribe-3'} callBack={() => Button3Foo()} />
		</div>

	);
}

export default App;
