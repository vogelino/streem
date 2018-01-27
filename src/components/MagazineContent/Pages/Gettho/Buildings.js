import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img');

const image = (name) => `/images/gettho/${name}.png`;

const operations = {
	add: (a, b) => a + b,
	substract: (a, b) => a - b,
};

const getBlockX = ({ base, operation = 'add', hovered, clicked }) => {
	const xBase = base;
	const op = operations[operation];

	if (clicked) {
		return op(xBase, 55);
	}
	else if (hovered) {
		return op(xBase, 3);
	}
	return xBase;
};

const getBlockY = ({ base, operation = 'add', hovered, clicked }) => {
	const yBase = base;
	const op = operations[operation];

	if (clicked) {
		return op(yBase, 25);
	}
	else if (hovered) {
		return op(yBase, 3);
	}
	return yBase;
};

const Buildings = (props) => [
	<BuildingBlock
		x={getBlockX({ base: 0, operation: 'substract', ...props })}
		y={getBlockY({ base: -118, operation: 'substract', ...props })}
		delay={300}
		src={image('LeftGettho')}
		startAt={800}
		key="leftGetthoBlock"
	/>,
	<BuildingBlock
		x={getBlockX({ base: 259, ...props })}
		y={getBlockY({ base: -183, ...props })}
		delay={400}
		src={image('RightGettho')}
		startAt={800}
		key="rightGetthoBlock"
	/>,
];

export default Buildings;
