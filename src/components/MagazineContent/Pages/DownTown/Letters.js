import React from 'react';
import AbsoluteElement from './AbsoluteElement';

export const Letter = AbsoluteElement('img');

export default () => [
	<Letter
		src="/images/downtown/letters/S.png"
		key="S"
		x={324}
		y={119}
		delay={900}
	/>,
	<Letter
		src="/images/downtown/letters/T.png"
		key="T"
		x={462}
		y={138}
		delay={1200}
	/>,
	<Letter
		src="/images/downtown/letters/R.png"
		key="R"
		x={301}
		y={284}
		delay={1500}
	/>,
	<Letter
		src="/images/downtown/letters/E1.png"
		key="E1"
		x={386}
		y={342}
		delay={1800}
	/>,
	<Letter
		src="/images/downtown/letters/E2.png"
		key="E2"
		x={668}
		y={406}
		delay={2100}
	/>,
	<Letter
		src="/images/downtown/letters/M.png"
		key="M"
		x={716}
		y={145}
		delay={2300}
	/>,
];
