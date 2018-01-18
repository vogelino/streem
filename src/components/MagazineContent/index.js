import React from 'react';
import styled from 'styled-components';
import ScrollTimeline from '../ScrollTimeline';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

const MagazineContentWrapper = styled.div`
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const layout = [
	{
		x: 0,
		y: 0,
		Component: Page1,
		props: {},
		id: '01',
		speed: 1,
	},
	{
		x: 0,
		y: 1,
		Component: Page2,
		props: {},
		id: '02',
		speed: 1,
	},
	{
		x: 1,
		y: 1,
		Component: Page3,
		props: {},
		id: '03',
		speed: 3,
	},
	{
		x: 1,
		y: 0,
		Component: Page4,
		props: {},
		id: '04',
		speed: 1,
	},
	{
		x: 0,
		y: 0,
		Component: () => null,
		props: {},
		id: '05',
		speed: 1,
	},
];

const MagazineContent = ({ windowWidth, windowHeight }) => (
	<MagazineContentWrapper>
		<ScrollTimeline {...{ layout, windowWidth, windowHeight }} />
	</MagazineContentWrapper>
);

MagazineContent.propTypes = {
	windowWidth: ScrollTimeline.propTypes.windowWidth,
	windowHeight: ScrollTimeline.propTypes.windowHeight,
};

export default MagazineContent;
