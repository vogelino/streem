import React from 'react';
import CircleLight from './CircleLight';

export default () => [
	<CircleLight
		key="yellow-right-1"
		color="yellow"
		x={80}
		y={38}
		delay={100}
		right
	/>,
	<CircleLight
		key="red-right-1"
		color="red"
		y={249}
		x={37}
		delay={200}
		right
	/>,
	<CircleLight
		key="red-right-2"
		color="red"
		y={290}
		x={37}
		delay={300}
		right
	/>,
	<CircleLight
		key="green-left-1"
		color="green"
		y={333}
		x={218}
		delay={400}
	/>,
	<CircleLight
		key="pink-left-1"
		color="pink"
		y={359}
		x={218}
		scale=".8"
		delay={500}
	/>,
	<CircleLight
		key="blue-left-1"
		color="blue"
		y={385}
		x={218}
		delay={200}
	/>,
	<CircleLight
		key="pink-left-2"
		color="pink"
		y={34}
		x={551}
		scale=".8"
		delay={183}
	/>,
	<CircleLight
		key="blue-right-1"
		color="blue"
		x={682}
		y={138}
		right
		delay={745}
	/>,
	<CircleLight
		key="red-right-3"
		color="red"
		x={682}
		y={168}
		right
		delay={352}
	/>,
	<CircleLight
		key="yellow-right-2"
		color="yellow"
		x={1242}
		y={398}
		right
		delay={612}
	/>,
];

