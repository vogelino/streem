import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings, { BuildingBlock } from './Buildings';
import Lights from './Lights';
import Light from './Light';

const ScreenButton = styled('button')`
	display: block;
	border: none;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: none;

	&.ready ${BuildingBlock},
	&.ready ${Light} {
		opacity: 1;
	}
`;

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<ScreenButton className={ready && 'ready'}>
			<Buildings />
			<Lights />
		</ScreenButton>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
