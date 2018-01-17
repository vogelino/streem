import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TitleScreen extends Component {
	constructor(props) {
		super(props);

		this.state = { ready: false };
	}
	render() {
		// const { ready } = this.state;
		return (
			<button onClick={() => this.setState({ ready: true })}>
				Hello
			</button>
		);
	}
}

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
