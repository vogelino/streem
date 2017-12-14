import React, { Component } from 'react';
import { Power4 } from 'gsap';
import './App.css';
import '../../polyfills/optimizedResize';
import ScrollTimeline from '../ScrollTimeline';

const layout = [
	{
		x: 0,
		y: 0,
		Component: () => <div />,
		props: {},
		speed: 1,
	},
	{
		x: 0,
		y: 1,
		Component: () => <div />,
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

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
		};
	}
	componentDidMount() {
		window.addEventListener('optimizedResize', () => this.setState({
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
		}));
	}
	render() {
		const { windowHeight, windowWidth } = this.state;
		return (
			<div className="app">
				<ScrollTimeline {...{ layout, windowWidth, windowHeight }} />
			</div>
		);
	}
}

export default App;
