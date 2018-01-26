import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img');

const image = (name) => `/images/gettho/buildings/${name}.png`;

const buildings = [
	{
		x: 0,
		y: -150,
		delay: 300,
		src: image('Fabric'),
	},
	{
		x: 131,
		y: 190,
		delay: 400,
		src: image('Crane'),
	},
	{
		x: 0,
		y: -50,
		delay: 100,
		src: image('Water'),
	},
	{
		x: 384,
		y: 337,
		delay: 1200,
		src: image('BrickFloor'),
	},
	{
		x: 1050,
		y: -95,
		delay: 1300,
		src: image('BigBuildingBackRight'),
	},
	{
		x: 1118,
		y: 150,
		delay: 500,
		src: image('BuildingCenterRight'),
	},
	{
		x: 559,
		y: 125,
		delay: 600,
		src: image('BuildingCenter'),
	},
	{
		x: 860,
		y: 375,
		delay: 700,
		src: image('BuildingBlockFrontRight'),
	},
	{
		x: 604,
		y: 549,
		delay: 800,
		src: image('BuildingBlockFrontCenter'),
	},
	{
		x: 344,
		y: 200,
		delay: 900,
		src: image('BuildingBackLeft'),
	},
	{
		x: 774,
		y: -50,
		delay: 1000,
		src: image('BuildingBackCenter'),
	},
	{
		x: 903,
		y: 375,
		delay: 1100,
		src: image('Brigde'),
	},
	{
		x: 0,
		y: 500,
		delay: 200,
		src: image('Soccerfield'),
	},
].map((buildingProps) => (
	<BuildingBlock {...buildingProps} key={buildingProps.src} startAt={800} />
));

export default () => buildings;
