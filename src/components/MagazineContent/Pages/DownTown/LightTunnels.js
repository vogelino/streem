import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import AbsoluteElement from './AbsoluteElement';

const fadeInOutAnimation = keyframes`
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: .6;
	}
`;

const LightTunnelImg = styled.img.attrs({
	style: ({ delay }) => ({
		animationDelay: `${(delay || 0) * 3}ms`,
	}),
})`
	animation: ${fadeInOutAnimation} 6s linear infinite;
`;

export const LightTunnel = AbsoluteElement('span');

const Tunnel = (props) => (
	<LightTunnel {...props} startAt={800}>
		<LightTunnelImg src={props.src} />
	</LightTunnel>
);

Tunnel.propTypes = {
	src: PropTypes.string.isRequired,
};

export default () => [
	<Tunnel
		src="/images/downtown/lights/RedLightTunnel.png"
		key="red-light-tunnel"
		x={67}
		y={7}
		delay={100}
	/>,
	<Tunnel
		src="/images/downtown/lights/GreenLightTunnel.png"
		key="green-light-tunnel"
		x={834}
		y={162}
		delay={300}
	/>,
	<Tunnel
		src="/images/downtown/lights/BlueLightTunnel.png"
		key="blue-light-tunnel"
		x={559}
		delay={200}
	/>,
	<Tunnel
		src="/images/downtown/lights/PinkLightTunnel.png"
		key="pink-light-tunnel"
		x={410}
		y={242}
		delay={400}
	/>,
];

