import React from 'react';
import Page from '../Page';
import Buildings from './Buildings';

const Gettho = () => (
	<Page render={({ ready }) => (
		<Page.Screen className={ready && 'ready'}>
			<Buildings />
		</Page.Screen>
	)}
	/>
);

Gettho.defaultProps = {};

Gettho.propTypes = {};

export default Gettho;

