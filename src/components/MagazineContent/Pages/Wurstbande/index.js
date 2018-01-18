import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings from './Buildings';

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<Page.Screen className={ready && 'ready'}>
			<Buildings />
		</Page.Screen>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;

