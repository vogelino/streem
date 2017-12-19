import React from 'react';
import { Power4 } from 'gsap';
import './MagazineContent.css';
import ScrollTimeline from '../ScrollTimeline';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';
import Page9 from './Pages/Page9';
import Page10 from './Pages/Page10';
import Page11 from './Pages/Page11';
import Page12 from './Pages/Page12';

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
		x: -1,
		y: 1,
		Component: Page3,
		props: {},
		id: '03',
		speed: 3,
		ease: Power4.easeOut,
	},
	{
		x: -1,
		y: 2,
		Component: Page4,
		props: {},
		id: '04',
		speed: 1,
	},
	{
		x: 0,
		y: 2,
		Component: Page5,
		props: {},
		id: '05',
		speed: 1,
	},
	{
		x: 1,
		y: 2,
		Component: Page6,
		props: {},
		id: '06',
		speed: 1,
	},
	{
		x: 1,
		y: 1,
		Component: Page7,
		props: {},
		id: '07',
	},
	{
		x: 1,
		y: 0,
		Component: Page8,
		props: {},
		id: '08',
		speed: 3,
	},
	{
		x: 1,
		y: -1,
		Component: Page9,
		props: {},
		id: '09',
		speed: 1,
	},
	{
		x: 0,
		y: -1,
		Component: Page10,
		props: {},
		id: '10',
		speed: 1,
	},
	{
		x: -1,
		y: -1,
		Component: Page11,
		props: {},
		id: '11',
		speed: 1,
	},
	{
		x: -1,
		y: 0,
		Component: Page12,
		props: {},
		id: '12',
	},
	{
		x: -2,
		y: 0,
		Component: Page12,
		props: {},
		id: '13',
	},
	{
		x: -3,
		y: 0,
		Component: Page12,
		props: {},
		id: '14',
	},
	{
		x: -4,
		y: 0,
		Component: Page12,
		props: {},
		id: '15',
	},
];

const MagazineContent = ({ windowWidth, windowHeight }) => (
	<div className="magazine-content">
		<ScrollTimeline {...{ layout, windowWidth, windowHeight }} />
	</div>
);

MagazineContent.propTypes = {
	windowWidth: ScrollTimeline.propTypes.windowWidth,
	windowHeight: ScrollTimeline.propTypes.windowHeight,
};

export default MagazineContent;
