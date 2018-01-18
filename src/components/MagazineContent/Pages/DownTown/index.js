import React from 'react';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings from './Buildings';
import LightTunnels from './LightTunnels';
import Letters from './Letters';
import AbsoluteElement from './AbsoluteElement';
import Lights from './Lights';

const LightsImg = AbsoluteElement('img');

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<Page.Screen className={ready && 'ready'}>
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
		</Page.Screen>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
