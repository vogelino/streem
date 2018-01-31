import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings from './Buildings';
import Clouds from './Clouds';

const Wurstbande = () => (
	<Page
		render={({ ready }) => (
			<Page.Screen className={ready && 'ready'}>
				<Buildings />
				<Clouds />
			</Page.Screen>
		)}
	/>
);

Wurstbande.defaultProps = {};

Wurstbande.propTypes = {};

export default Wurstbande;
