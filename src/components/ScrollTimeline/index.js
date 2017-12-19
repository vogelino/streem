import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, TweenLite, Power0 } from 'gsap';
import './ScrollTimeline.css';
import ScrollLayout from '../ScrollLayout';

const SCROLL_MAX_DISTANCE = 40000;

const getDirection = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
	if (x1 > x2) {
		return 'right';
	}
	else if (x1 < x2) {
		return 'left';
	}
	else if (y1 > y2) {
		return 'down';
	}
	return 'up';
};

class ScrollTimeline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			percentProgress: 0,
			pixelProgress: 0,
		};
		this.coordinates = { x: 0, y: 0 };
		this.timeline = this.initTimeline(props.layout);
	}
	onWheel(evt) {
		const {
			pixelProgress: oldPixelProgress,
			percentProgress: oldPercentProgress,
		} = this.state;
		const pixelProgress = oldPixelProgress + evt.deltaY;

		let percentProgress = (pixelProgress / SCROLL_MAX_DISTANCE);
		percentProgress = Math.max(0, Math.min(1, percentProgress));

		if (percentProgress === oldPercentProgress) return;

		this.setState({ percentProgress, pixelProgress });
		this.timeline.progress(percentProgress);
	}
	initTimeline() {
		const { layout } = this.props;
		const { windowHeight, windowWidth } = this.props;
		TweenLite.defaultEase = Power0.easeNone;
		const tl = new TimelineLite({ paused: true });

		layout
			.filter(({ ignore }) => !ignore)
			.forEach((currentBlock, index) => {
				const nextBlock = layout[index + 1];
				if (!nextBlock) return;

				const { speed, ease } = currentBlock;
				const direction = getDirection(currentBlock, nextBlock);

				const addStep = (axis, operation) => {
					const op = { add: '+', substract: '-' }[operation];
					const size = axis === 'x' ? windowWidth : windowHeight;
					tl.to(this.coordinates, size / speed, {
						[axis]: `${op}=${size}`,
						ease: ease || Power0.easeNone,
					});
				};

				switch (direction) {
				case 'down': addStep('y', 'substract'); break;
				case 'up': addStep('y', 'add'); break;
				case 'right': addStep('x', 'substract'); break;
				default: addStep('x', 'add'); break;
				}
			});

		return tl;
	}
	render() {
		const { percentProgress } = this.state;
		const { layout } = this.props;
		const { x, y } = this.coordinates;
		return (
			<div
				className="scroll-timeline"
				onWheel={(evt) => this.onWheel(evt)}
			>
				<div className="scroll-timeline-content">
					<ScrollLayout
						xPosition={x}
						yPosition={y}
						progress={percentProgress}
						layout={layout}
					/>
				</div>
			</div>
		);
	}
}

ScrollTimeline.propTypes = {
	layout: ScrollLayout.propTypes.layout,
	windowHeight: PropTypes.number.isRequired,
	windowWidth: PropTypes.number.isRequired,
};

export default ScrollTimeline;
