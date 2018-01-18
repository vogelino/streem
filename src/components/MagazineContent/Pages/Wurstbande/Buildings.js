import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img');

const image = (name) => `/images/wurstbande/buildings/${name}.png`;

const buildings = [
	{
		x: 305,
		y: 0,
		delay: 1600,
		src: image('TopCenterBackBlock'),
	},
	{
		x: -110,
		y: 373,
		delay: 100,
		src: image('VeryLeftBlock'),
	},
	{
		x: -180,
		y: 0,
		delay: 400,
		src: image('TopLeftBackBlock'),
	},
	{
		x: -360,
		y: 10,
		delay: 200,
		src: image('TopLeftFrontBlock'),
	},
	{
		x: 165,
		y: 247,
		delay: 600,
		src: image('LeftFrontBlock'),
	},
	{
		y: 0,
		x: 620,
		delay: 2000,
		src: image('CenterBackBlock'),
	},
	{
		x: 273,
		y: 47,
		delay: 800,
		src: image('CenterLeftBlock'),
	},
	{
		x: 373,
		y: 422,
		delay: 1200,
		src: image('CenterFrontBlock'),
	},
	{
		x: 0,
		y: 672,
		delay: 1400,
		src: image('BottomLeftBlock'),
	},
	{
		x: 760,
		y: 190,
		delay: 1800,
		src: image('CenterRightBlock'),
	},
	{
		x: 933,
		y: 327,
		delay: 2200,
		src: image('RightFrontBlock'),
	},
	{
		x: 1025,
		y: 0,
		delay: 2400,
		src: image('BackRightBlock'),
	},
].map((buildingProps) =>
	<BuildingBlock {...buildingProps} key={buildingProps.src} startAt={800} />
);

export default () => buildings;

