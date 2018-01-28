import React, { Component } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Page from '../Page';
import Buildings from './Buildings';
import TypoPath from './TypoPath';

class Typoworld extends Component {
	constructor(props) {
		super(props);

		this.state = { mousePercentPosition: 0 };
	}
	onMouseMove(evt) {
		const { offsetX } = evt.nativeEvent;
		this.setState({ mousePercentPosition: ((offsetX / 1440) * 100) });
	}
	render() {
		return (
			<Page
				render={({ ready }) => (
					<Page.Screen
						className={ready && 'ready'}
						onMouseMove={(evt) => this.onMouseMove(evt)}
					>
						<Buildings />
						<TypoPath progress={this.state.mousePercentPosition} />
					</Page.Screen>
				)}
			/>
		);
	}
}

Typoworld.defaultProps = {};

Typoworld.propTypes = {};

export default Typoworld;
