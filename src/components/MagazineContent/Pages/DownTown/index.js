import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings, { BuildingBlock } from './Buildings';
import LightTunnels, { LightTunnel } from './LightTunnels';
import Letters, { Letter } from './Letters';
import AbsoluteElement from './AbsoluteElement';
import Lights from './Lights';
import Light from './Light';

const LightsImg = AbsoluteElement('img');
const ScreenButton = styled('button')`
	display: block;
	border: none;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: none;

	&.ready ${BuildingBlock},
	&.ready ${LightTunnel},
	&.ready ${LightsImg},
	&.ready ${Letter},
	&.ready ${Light} {
		opacity: 1;
	}
`;

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<ScreenButton className={ready && 'ready'}>
			<Buildings />
			<LightTunnels />
			<Lights />
			<LightsImg
				src="/images/downtown/lights/Lights.png"
				x={0}
				y={67}
				delay={800}
			/>
			<Letters />
		</ScreenButton>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
