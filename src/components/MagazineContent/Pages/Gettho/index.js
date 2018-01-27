import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../Page';
import Buildings from './Buildings';

const SvgClickTrigger = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	width: 3084,
	height: 1987,
	viewBox: '0 0 3084 1987',
})`
	position: absolute;
	bottom: 0;
	left: 0;
	transform-origin: 0 100%;
	transform: scale(0.5);
`;

const SvgClickTriggerPath = styled.path.attrs({
	d:
		'M2707.52,617,2025.78,999.7h-53.62a120,120,0,0,0-60.64,16.45l-333,195a119.94,119.94,0,0,0-40,38.11,120,120,0,0,0-51.46,17.34L1216,1434a120,120,0,0,0-168.75,86.36l-80.6,44A119.92,119.92,0,0,0,928,1598a120,120,0,0,0-53.64,16.89l-133,80A120,120,0,0,0,686.39,1770L419.31,1923.69a119.51,119.51,0,0,0-53,63.31H790.51l73.5-42.29a120,120,0,0,0,57.31-78l48.15-29h55.69a120,120,0,0,0,117.58-96l79.93-43.65q4.3-2.36,8.36-5a120,120,0,0,0,50.18-17.21l303-187.1h55.94a120,120,0,0,0,119.09-105.26l245.46-143.74h52.45a120,120,0,0,0,58.74-15.36l798-448A120,120,0,0,0,2943.47,753Z',
})`
	fill: transparent;
`;

class Gettho extends Component {
	constructor(props) {
		super(props);

		this.state = { hovered: false, clicked: false };
	}
	render() {
		return (
			<Page
				render={({ ready }) => (
					<Page.Screen className={ready && 'ready'}>
						<Buildings
							hovered={this.state.hovered}
							clicked={this.state.clicked}
						/>
						<SvgClickTrigger>
							<SvgClickTriggerPath
								onMouseEnter={() =>
									this.setState({ hovered: true })
								}
								onMouseOut={() =>
									this.setState({ hovered: false })
								}
								onClick={() =>
									this.setState({
										clicked: !this.state.clicked,
									})
								}
							/>
						</SvgClickTrigger>
					</Page.Screen>
				)}
			/>
		);
	}
}

Gettho.defaultProps = {};

Gettho.propTypes = {};

export default Gettho;
