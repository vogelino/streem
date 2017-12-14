import React from 'react';
import './App.css';
import ScrollProgress from '../ScrollProgress';

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

const App = () => (
	<div className="app">
		<ScrollProgress story={story} />
	</div>
);

export default App;
