import styled from 'styled-components';

export default (type) => styled(type).attrs({
	style: ({ x = 0, y = 0, delay = 0, startAt = 0 }) => ({
		top: `${y}px`,
		left: `${x}px`,
		transitionDelay: `${delay + startAt}ms, 0, 0`,
	}),
})`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03),
		left 200ms cubic-bezier(.35,.71,.28,1.03),
		top 200ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
`;

