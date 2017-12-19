import React from 'react';
import { Power4 } from 'gsap';
import './MagazineContent.css';
import ScrollTimeline from '../ScrollTimeline';
import TitlePage from './Pages/Title';
import IntroductionPage from './Pages/Introduction';

const layout = [
	{
		x: 0,
		y: 0,
		Component: TitlePage,
		props: {},
		speed: 1,
	},
	{
		x: 0,
		y: 1,
		Component: IntroductionPage,
		props: {},
		speed: 1,
	},
	{
		x: 1,
		y: 1,
		Component: () => <div />,
		props: {},
		speed: 3,
		ease: Power4.easeOut,
	},
	{
		x: 1,
		y: 2,
		Component: () => <div />,
		props: {},
		speed: 1,
	},
	{
		x: 1,
		y: 3,
		Component: () => <div />,
		props: {},
		speed: 1,
	},
	{
		x: 0,
		y: 3,
		Component: () => <div />,
		props: {},
		speed: 1,
	},
	{
		x: 0,
		y: 2,
		Component: () => <div />,
		props: {},
		ignore: true,
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
