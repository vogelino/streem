import React, { Component } from 'react';
import './ScrollProgress.css';
import ScrollStory from '../ScrollStory';
import { assignRef } from '../../utils/componentUtil';

class ScrollProgress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
			totalScrollProgress: 0,
			xScrollPosition: 0,
			yScrollPosition: 0,
		};
	}
	onWheel(evt) {
		const {
			xScrollPosition,
			yScrollPosition,
			windowHeight,
			windowWidth,
		} = this.state;
		const isScrollingDown = evt.deltaY > 0;

		let isInFirstColumn = yScrollPosition >= 0 &&
			yScrollPosition <= windowHeight &&
			xScrollPosition === 0;
		let isInFirstRow = xScrollPosition >= 0 &&
			xScrollPosition <= windowWidth &&
			yScrollPosition === windowHeight;
		let isInSecondColumn = yScrollPosition >= windowHeight &&
			yScrollPosition <= (3 * windowHeight) &&
			xScrollPosition === windowWidth;
		let isInSecondRow = xScrollPosition <= windowWidth &&
			xScrollPosition >= 0 &&
			yScrollPosition === (3 * windowHeight);

		if (isInFirstColumn && isInFirstRow) {
			isInFirstColumn = !isScrollingDown;
			isInFirstRow = isScrollingDown;
		}
		else if (isInFirstRow && isInSecondColumn) {
			isInFirstRow = !isScrollingDown;
			isInSecondColumn = isScrollingDown;
		}
		else if (isInSecondColumn && isInSecondRow) {
			isInSecondColumn = !isScrollingDown;
			isInSecondRow = isScrollingDown;
		}

		if (isInFirstColumn) {
			let newYScrollPosition = yScrollPosition + evt.deltaY;
			newYScrollPosition = newYScrollPosition > windowHeight ?
				windowHeight : newYScrollPosition;
			newYScrollPosition = newYScrollPosition < 0 ?
				0 : newYScrollPosition;
			this.setState({
				yScrollPosition: newYScrollPosition,
				xScrollPosition: 0,
			});
		}
		else if (isInFirstRow) {
			let newXScrollPosition = xScrollPosition + evt.deltaY;
			newXScrollPosition = newXScrollPosition > windowWidth ?
				windowWidth : newXScrollPosition;
			newXScrollPosition = newXScrollPosition < 0 ?
				0 : newXScrollPosition;
			this.setState({
				xScrollPosition: newXScrollPosition,
				yScrollPosition: windowHeight,
			});
		}
		else if (isInSecondColumn) {
			let newYScrollPosition = yScrollPosition + evt.deltaY;
			newYScrollPosition = newYScrollPosition > (3 * windowHeight) ?
				(3 * windowHeight) : newYScrollPosition;
			newYScrollPosition = newYScrollPosition < windowHeight ?
				windowHeight : newYScrollPosition;
			this.setState({
				yScrollPosition: newYScrollPosition,
				xScrollPosition: windowWidth,
			});
		}
		else if (isInSecondRow) {
			let newXScrollPosition = xScrollPosition - evt.deltaY;
			newXScrollPosition = newXScrollPosition > windowWidth ?
				windowWidth : newXScrollPosition;
			newXScrollPosition = newXScrollPosition < 0 ?
				0 : newXScrollPosition;
			this.setState({
				xScrollPosition: newXScrollPosition,
				yScrollPosition: (3 * windowHeight),
			});
		}
	}
	render() {
		const { story } = this.props;
		const { xScrollPosition, yScrollPosition } = this.state;
		return (
			<div
				className="scroll-progress"
				onWheel={(evt) => this.onWheel(evt)}
				ref={assignRef(this.scrollContainer)}
			>
				<div className="scroll-progress-content">
					<ScrollStory
						xPosition={xScrollPosition}
						yPosition={yScrollPosition}
						story={story}
					/>
				</div>
			</div>
		);
	}
}

ScrollProgress.propTypes = {
	story: ScrollStory.propTypes.story,
};

export default ScrollProgress;
