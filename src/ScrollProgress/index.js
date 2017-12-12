import React, { Component } from 'react';
import './ScrollProgress.css';
import ScrollStory from '../ScrollStory';

const TOTAL_SCROLL_HEIGHT = 10000;

class ScrollProgress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollPixelProgress: 0,
			scrollPercentProgress: 0,
		};
	}
	onWheel(evt) {
		const {
			scrollPixelProgress: oldScrollPixelProgress,
			scrollPercentProgress: oldScrollPercentProgress,
		} = this.state;
		let scrollPixelProgress = oldScrollPixelProgress + evt.deltaY;

		if (scrollPixelProgress < 0) {
			scrollPixelProgress = 0;
		}
		else if (scrollPixelProgress > TOTAL_SCROLL_HEIGHT) {
			scrollPixelProgress = TOTAL_SCROLL_HEIGHT;
		}

		const scrollPercentProgress = parseFloat(
			(scrollPixelProgress / TOTAL_SCROLL_HEIGHT) * 100
		);

		if (scrollPercentProgress !== oldScrollPercentProgress &&
			scrollPixelProgress !== oldScrollPixelProgress) {
			this.setState({ scrollPixelProgress, scrollPercentProgress });
		}
	}
	render() {
		return (
			<div
				className="scroll-progress"
				onWheel={(evt) => this.onWheel(evt)}
				ref={(node) => {
					this.scrollContainer = node;
				}}
			>
				<div className="scroll-progress-content">
					<ScrollStory
						progress={this.state.scrollPixelProgress}
						story={[
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
						]}
					/>
				</div>
			</div>
		);
	}
}

export default ScrollProgress;
