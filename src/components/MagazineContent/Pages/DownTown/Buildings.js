import React from 'react';
import AbsoluteElement from './AbsoluteElement';
import ObservedComponent from '../../../ObservedComponent';

export const BuildingBlock = ObservedComponent(AbsoluteElement('img'));

export default () => [
	<BuildingBlock
		key="BuildingsBlockBack"
		src="/images/downtown/buildings/BuildingsBlockBack.png"
		x={430}
	/>,
	<BuildingBlock
		key="BuildingsBlockBackLeft"
		src="/images/downtown/buildings/BuildingsBlockBackLeft.png"
		delay={200}
	/>,
	<BuildingBlock
		key="BuildingsBlockBackRight"
		src="/images/downtown/buildings/BuildingsBlockBackRight.png"
		x={732}
		delay={100}
	/>,
	<BuildingBlock
		key="BuildingsBlockLeft"
		src="/images/downtown/buildings/BuildingsBlockLeft.png"
		y={5}
		delay={300}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterBack"
		src="/images/downtown/buildings/BuildingsBlockCenterBack.png"
		x={430}
		delay={400}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterLeft"
		src="/images/downtown/buildings/BuildingsBlockCenterLeft.png"
		x={172}
		y={32}
		delay={500}
	/>,
	<BuildingBlock
		key="BuildingsBlockCenterRight"
		src="/images/downtown/buildings/BuildingsBlockCenterRight.png"
		x={645}
		y={25}
		delay={700}
	/>,
	<BuildingBlock
		key="DownTownBlockFront"
		src="/images/downtown/buildings/DownTownBlockFront.png"
		x={301}
		y={180}
		delay={600}
	/>,
	<BuildingBlock
		key="DownTownBlockFrontRight"
		src="/images/downtown/buildings/DownTownBlockFrontRight.png"
		x={903}
		y={284}
		delay={800}
	/>,
	<BuildingBlock
		key="ShopsAndHouses"
		src="/images/downtown/buildings/ShopsAndHouses.png"
		x={0}
		y={585}
		delay={900}
	/>,
];

