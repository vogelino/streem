import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';
import ImageSlider from './ImageSlider';

const BuildingBlock = AbsoluteElement('img', `
transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03),
	left 200ms cubic-bezier(.35,.71,.28,1.03),
	top 200ms cubic-bezier(.35,.71,.28,1.03);
`);

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
		delays="800ms, 0, 0"
		src={image('LeftGettho')}
		key="leftGetthoBlock"
	/>,
	<ImageSlider {...props} key="GetthoImageSlider" />,
	<BuildingBlock
		x={getBlockX({ base: 259, ...props })}
		y={getBlockY({ base: -183, ...props })}
		delays="1100ms, 0, 0"
		src={image('RightGettho')}
		key="rightGetthoBlock"
	/>,
];

export default Buildings;
