import React from 'react';
import styled from 'styled-components';

export const BuildingBlock = styled('img')`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
`;

export const BuildingsBlockBackLeft = styled(BuildingBlock)`
	left: 0;
	top: 0;
`;

export const BuildingsBlockBack = styled(BuildingBlock)`
	left: 430px;
	top: 0;
	transition-delay: 200ms;
`;

export const BuildingsBlockBackRight = styled(BuildingBlock)`
	left: 732px;
	top: 0;
	transition-delay: 100ms;
`;

export const BuildingsBlockLeft = styled(BuildingBlock)`
	left: 0;
	top: 5px;
	transition-delay: 300ms;
`;

export const BuildingsBlockCenterBack = styled(BuildingBlock)`
	left: 430px;
	top: 0;
	transition-delay: 400ms;
`;

export const BuildingsBlockCenterLeft = styled(BuildingBlock)`
	left: 172px;
	top: 32px;
	transition-delay: 500ms;
`;

export const DownTownBlockFront = styled(BuildingBlock)`
	left: 301px;
	top: 180px;
	transition-delay: 600ms;
`;

export const BuildingsBlockCenterRight = styled(BuildingBlock)`
	transition-delay: 700ms;
	left: 645px;
	top: 25px;
`;

export const DownTownBlockFrontRight = styled(BuildingBlock)`
	transition-delay: 800ms;
	left: 903px;
	top: 284px;
`;

export const ShopsAndHouses = styled(BuildingBlock)`
	transition-delay: 900ms;
	left: 0;
	top: 585px;
`;

export default () => [
	<BuildingsBlockBack
		key="BuildingsBlockBack"
		src="/images/downtown/BuildingsBlockBack.png"
	/>,
	<BuildingsBlockBackLeft
		key="BuildingsBlockBackLeft"
		src="/images/downtown/BuildingsBlockBackLeft.png"
	/>,
	<BuildingsBlockBackRight
		key="BuildingsBlockBackRight"
		src="/images/downtown/BuildingsBlockBackRight.png"
	/>,
	<BuildingsBlockLeft
		key="BuildingsBlockLeft"
		src="/images/downtown/BuildingsBlockLeft.png"
	/>,
	<BuildingsBlockCenterBack
		key="BuildingsBlockCenterBack"
		src="/images/downtown/BuildingsBlockCenterBack.png"
	/>,
	<BuildingsBlockCenterLeft
		key="BuildingsBlockCenterLeft"
		src="/images/downtown/BuildingsBlockCenterLeft.png"
	/>,
	<BuildingsBlockCenterRight
		key="BuildingsBlockCenterRight"
		src="/images/downtown/BuildingsBlockCenterRight.png"
	/>,
	<DownTownBlockFront
		key="DownTownBlockFront"
		src="/images/downtown/DownTownBlockFront.png"
	/>,
	<DownTownBlockFrontRight
		key="DownTownBlockFrontRight"
		src="/images/downtown/DownTownBlockFrontRight.png"
	/>,
	<ShopsAndHouses
		key="ShopsAndHouses"
		src="/images/downtown/ShopsAndHouses.png"
	/>,
];

