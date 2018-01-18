import styled from 'styled-components';

export default (type) => styled(type).attrs({
	style: ({ x, y, delay }) => ({
		top: `${y || 0}px`,
		left: `${x || 0}px`,
		transitionDelay: `${delay || 0}ms`,
	}),
})`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
`;

