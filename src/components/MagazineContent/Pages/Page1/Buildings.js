import React from 'react';
import AbsoluteElement from './AbsoluteElement';

export const BuildingBlock = AbsoluteElement('img');

export default () => [
	<BuildingBlock
		key="BuildingsBlockBack"
		src="/images/downtown/BuildingsBlockBack.png"
		x={430}
	/>,
	<BuildingBlock
		key="BuildingsBlockBackLeft"
		src="/images/downtown/BuildingsBlockBackLeft.png"
		delay={200}
	/>,
	<BuildingBlock
		key="BuildingsBlockBackRight"
		src="/images/downtown/BuildingsBlockBackRight.png"
		x={732}
		delay={100}
	/>,
	<BuildingBlock
		key="BuildingsBlockLeft"
		src="/images/downtown/BuildingsBlockLeft.png"
		y={5}
		delay={300}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterBack"
		src="/images/downtown/BuildingsBlockCenterBack.png"
		x={430}
		delay={400}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterLeft"
		src="/images/downtown/BuildingsBlockCenterLeft.png"
		x={172}
		y={32}
		delay={500}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterRight"
		src="/images/downtown/BuildingsBlockCenterRight.png"
		x={645}
		y={25}
		delay={700}
	/>,
	<BuildingBlock
		key="DownTownBlockFront"
		src="/images/downtown/DownTownBlockFront.png"
		x={301}
		y={180}
		delay={600}
	/>,
	<BuildingBlock
		key="DownTownBlockFrontRight"
		src="/images/downtown/DownTownBlockFrontRight.png"
		x={903}
		y={284}
		delay={800}
	/>,
	<BuildingBlock
		key="ShopsAndHouses"
		src="/images/downtown/ShopsAndHouses.png"
		x={0}
		y={585}
		delay={900}
	/>,
];

