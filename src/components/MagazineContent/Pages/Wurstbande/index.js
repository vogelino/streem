import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings from './Buildings';

const Wurstbande = () => (
	<Page
		render={({ ready }) => (
			<Page.Screen className={ready && 'ready'}>
				<Buildings />
			</Page.Screen>
		)}
	/>
);

Wurstbande.defaultProps = {};

Wurstbande.propTypes = {};

export default Wurstbande;
