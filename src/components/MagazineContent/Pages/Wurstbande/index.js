import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';

const TitleScreen = () => (
	<Page render={({ ready }) => (
		<Page.Screen className={ready && 'ready'}>
		</Page.Screen>
	)}
	/>
);

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;

