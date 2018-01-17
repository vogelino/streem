import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from './Page';

const BuildingBlock = styled('img')`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
`;

const ScreenButton = styled('button')`
	display: block;
	border: none;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: none;

	&.ready ${BuildingBlock} {
		opacity: 1;
	}
`;

const BuildingsBlockBackLeft = styled(BuildingBlock)`
	left: 0;
	top: 0;
`;

const BuildingsBlockBack = styled(BuildingBlock)`
	left: 430px;
	top: 0;
	transition-delay: 200ms;
`;

const BuildingsBlockBackRight = styled(BuildingBlock)`
	left: 732px;
	top: 0;
	transition-delay: 100ms;
`;

const BuildingsBlockLeft = styled(BuildingBlock)`
	left: 0;
	top: 5px;
	transition-delay: 300ms;
`;

const BuildingsBlockCenterBack = styled(BuildingBlock)`
	left: 430px;
	top: 0;
	transition-delay: 400ms;
`;

const BuildingsBlockCenterLeft = styled(BuildingBlock)`
	left: 172px;
	top: 32px;
	transition-delay: 500ms;
`;

const DownTownBlockFront = styled(BuildingBlock)`
	left: 301px;
	top: 180px;
	transition-delay: 600ms;
`;

const BuildingsBlockCenterRight = styled(BuildingBlock)`
	transition-delay: 700ms;
	left: 645px;
	top: 25px;
`;

const DownTownBlockFrontRight = styled(BuildingBlock)`
	transition-delay: 800ms;
	left: 903px;
	top: 284px;
`;

const ShopsAndHouses = styled(BuildingBlock)`
	transition-delay: 900ms;
	left: 0;
	top: 585px;
`;

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<ScreenButton className={ready && 'ready'}>
			<BuildingsBlockBack src="/images/downtown/BuildingsBlockBack.png" />
			<BuildingsBlockBackLeft src="/images/downtown/BuildingsBlockBackLeft.png" />
			<BuildingsBlockBackRight src="/images/downtown/BuildingsBlockBackRight.png" />
			<BuildingsBlockLeft src="/images/downtown/BuildingsBlockLeft.png" />
			<BuildingsBlockCenterBack src="/images/downtown/BuildingsBlockCenterBack.png" />
			<BuildingsBlockCenterLeft src="/images/downtown/BuildingsBlockCenterLeft.png" />
			<BuildingsBlockCenterRight src="/images/downtown/BuildingsBlockCenterRight.png" />
			<DownTownBlockFront src="/images/downtown/DownTownBlockFront.png" />
			<DownTownBlockFrontRight src="/images/downtown/DownTownBlockFrontRight.png" />
			<ShopsAndHouses src="/images/downtown/ShopsAndHouses.png" />
		</ScreenButton>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
