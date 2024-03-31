import React, { MouseEvent } from 'react';

type ButtonPropsType = {
	name: string;
	callBack: () => void;
}

// export type callBackPropsType = {
// 	subscriber: string;
// }

export const Button = (props: ButtonPropsType) => {

	const onClickHandler = () => {
		props.callBack();
	}

	return (
		<button onClick={onClickHandler}>{props.name}</button>
	)
}