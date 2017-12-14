import React, { Component } from 'react';
import './App.css';
import '../../polyfills/optimizedResize';
import ScrollTimeline from '../ScrollTimeline';

const story = [
	{
		x: 0,
		y: 0,
		Component: () => <div />,
		props: {},
	},
	{
		x: 0,
		y: 1,
		Component: () => <div />,
		props: {},
	},
	{
		x: 1,
		y: 1,
		Component: () => <div />,
		props: {},
	},
	{
		x: 1,
		y: 2,
		Component: () => <div />,
		props: {},
	},
	{
		x: 1,
		y: 3,
		Component: () => <div />,
		props: {},
	},
	{
		x: 0,
		y: 3,
		Component: () => <div />,
		props: {},
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
				<ScrollTimeline {...{ story, windowWidth, windowHeight }} />
			</div>
		);
	}
}

export default App;
