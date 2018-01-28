import React from 'react';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const BuildingBlock = AbsoluteElement('img');

export default () => (
	<BuildingBlock
		x={-356}
		y={-114}
		delay={1600}
		src="/images/wurstbande/wurstbande.png"
	/>
);
