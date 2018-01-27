import React from 'react';
import styled from 'styled-components';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img', `
transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03),
	left 200ms cubic-bezier(.35,.71,.28,1.03),
	top 200ms cubic-bezier(.35,.71,.28,1.03);
`);

const image = (name) => `/images/gettho/${name}.png`;

const Image = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, ${({ clicked }) => (clicked ? 140 : 1000)}px) skewY(-30deg);
	transition: transform 800ms cubic-bezier(.51,.55,0,1.5);
	background: blue;
	width: 400px;
	height: 300px;
`;

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
	<Image {...props} key="GetthoImageSlider" />,
	<BuildingBlock
		x={getBlockX({ base: 259, ...props })}
		y={getBlockY({ base: -183, ...props })}
		delays="1100ms, 0, 0"
		src={image('RightGettho')}
		key="rightGetthoBlock"
	/>,
];

export default Buildings;
