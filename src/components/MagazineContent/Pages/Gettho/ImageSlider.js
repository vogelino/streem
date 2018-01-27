import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = styled.div`
	position: absolute;
	top: 0;
	left: 40%;
	transform: translate(-50%, ${({ clicked }) => (clicked ? 60 : 1000)}px)
		skewY(-30deg);
	transition: transform 800ms cubic-bezier(0.51, 0.55, 0, 1.5);
	width: 500px;
	height: 600px;
`;

const SlidesWrapper = styled.div`
	width: 500px;
	height: 1000px;
	pointer-events: none;
`;

const Slides = styled.div.attrs({
	style: ({ y }) => ({
		transform: `translateY(-${y}px)`,
	}),
})`
	transition: transform 800ms cubic-bezier(0,.5,0,1.02);
	height: ${({ slidesAmount }) => slidesAmount * 1000}px;
	width: 500px;
`;

const Slide = styled.div.attrs({
	style: ({ url, active }) => ({
		backgroundImage: `url('${url}')`,
		opacity: active ? 1 : 0,
	}),
})`
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center top;
	width: 500px;
	height: 1000px;
	float: left;
	transition: opacity 800ms ease-in-out;
`;

const Controls = styled.div`
	position: absolute;
	left: 520px;
	top: 50%;
	transform: translateY(-50%);
	width: 60px;
	height: 140px;
	z-index: 10;
`;

const Control = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	transition: transform 200ms ease-out;
	transform: scale(1);
	cursor: pointer;
	background-size: 60px 60px;
	background-repeat: no-repeat;

	&:hover {
		transform: scale(1.2);
	}
`;

const image = (name) => `/images/gettho/slider/${name}.png`;

const NextControl = Control.extend`
	margin-bottom: 20px;
	background-image: url(${image('upButton')});
`;

const PrevControl = NextControl.extend`
	background-image: url(${image('downButton')});
`;

const CloseControl = Control.extend`
	background-image: url(${image('closeButton')});
`;

class ImageSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0,
			slides: [
				image('1'),
				image('2'),
				image('3'),
				image('4'),
				image('5'),
				image('6'),
				image('7'),
				image('8'),
				image('9'),
				image('10'),
				image('11'),
				image('12'),
				image('13'),
				image('14'),
			],
		};
	}
	goNext() {
		let currentSlide = this.state.currentSlide + 1;
		currentSlide =
			currentSlide > this.state.slides.length - 1 ? 0 : currentSlide;
		this.setState({ currentSlide });
	}
	goPrev() {
		let currentSlide = this.state.currentSlide - 1;
		currentSlide =
			currentSlide < 0 ? this.state.slides.length - 1 : currentSlide;
		this.setState({ currentSlide });
	}
	render() {
		return (
			<SliderContainer clicked={this.props.clicked}>
				<SlidesWrapper>
					<Slides
						y={1000 * this.state.currentSlide}
						slidesAmount={this.state.slides.length}
					>
						{this.state.slides.map((url, index) => (
							<Slide
								url={url}
								key={url}
								active={this.state.currentSlide === index}
							/>
						))}
					</Slides>
				</SlidesWrapper>
				<Controls>
					<NextControl onClick={() => this.goNext()} />
					<PrevControl onClick={() => this.goPrev()} />
					<CloseControl onClick={() => this.props.close()} />
				</Controls>
			</SliderContainer>
		);
	}
}

ImageSlider.propTypes = {
	clicked: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
};

export default ImageSlider;
