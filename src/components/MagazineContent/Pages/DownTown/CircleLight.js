import React from 'react';
import styled, { keyframes } from 'styled-components';
import Light from './Light';

export const CircleLightParent = styled(Light)`
	top: ${({ y }) => y}px;
	left: ${({ x }) => x}px;
	width: 57px;
	height: 62px;
	background-image: url('/images/downtown/lights/CircleLight.png');
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
`;

const flickrAnimation = keyframes`
	from {
		opacity: 0.5;
	}
	4% {
		opacity: 0.5;
	}
	6% {
		opacity: 0.45;
	}
	8% {
		opacity: 0.55;
	}
	10% {
		opacity: 0.45;
	}
	11% {
		opacity: 0.5;
	}
	12% {
		opacity: 0.65;
	}
	14% {
		opacity: 0.55;
	}
	16% {
		opacity: 0.70;
	}
	17% {
		opacity: 0.55;
	}
	19% {
		opacity: 0.5;
	}
	20% {
		opacity: 0.5;
	}
	24% {
		opacity: 0.5;
	}
	26% {
		opacity: 0.69;
	}
	28% {
		opacity: 0.5;
	}
	38% {
		opacity: 0.45;
	}
	40% {
		opacity: 0.5;
	}
	42% {
		opacity: 0.6;
	}
	44% {
		opacity: 0.5;
	}
	46% {
		opacity: 0.5;
	}
	56% {
		opacity: 0.5;
	}
	58% {
		opacity: 0.75;
	}
	60% {
		opacity: 0.5;
	}
	68% {
		opacity: 0.5;
	}
	70% {
		opacity: .6; /*peak*/
	}
	72% {
		opacity: 0.5;
	}
	93% {
		opacity: 0.5;
	}
	95% {
		opacity: .6; /*peak*/
	}
	97% {
		opacity: 0.5;
	}
	to {
		opacity: 0.5;
	}
`;

const CirleLightInner = styled('span')`
	display: block;
	width: 57px;
	height: 62px;
	background-image: url('/images/downtown/lights/CircleLight-${({ color }) => color}.png');
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	transition: opacity 100ms ease-in-out;
	opacity: 0;
	animation: ${flickrAnimation} 2s linear infinite;
	animation-delay: ${({ delay }) => (delay || 0)}ms;
`;

export default (props) => (
	<CircleLightParent {...props}>
		<CirleLightInner {...props} />
	</CircleLightParent>
);

