import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img');

const image = (name) => `/images/gettho/${name}.png`;

const buildings = [
	{
		x: 0,
		y: -144,
		delay: 300,
		src: image('LeftGettho'),
	},
	{
		x: 259,
		y: -209,
		delay: 400,
		src: image('RightGettho'),
	},
].map((buildingProps) => (
	<BuildingBlock {...buildingProps} key={buildingProps.src} startAt={800} />
));

export default () => buildings;
