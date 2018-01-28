import React from 'react';
import styled from 'styled-components';
import ScrollTimeline from '../ScrollTimeline';
import DownTown from './Pages/DownTown';
import Wurstbande from './Pages/Wurstbande';
import Typoworld from './Pages/Typoworld';
import Gettho from './Pages/Gettho';

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
		Component: DownTown,
		props: {},
		id: '01',
		speed: 1,
		zIndex: 2,
	},
	{
		x: 0,
		y: 1,
		Component: Gettho,
		props: {},
		id: '02',
		speed: 1,
		zIndex: 2,
	},
	{
		x: 1,
		y: 1,
		Component: Typoworld,
		props: {},
		id: '03',
		speed: 1,
		zIndex: 3,
	},
	{
		x: 1,
		y: 0,
		Component: Wurstbande,
		props: {},
		id: '04',
		speed: 1,
		zIndex: 1,
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
