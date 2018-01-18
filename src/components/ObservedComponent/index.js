import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Observer from '@researchgate/react-intersection-observer';

export default (WrappedComponent, options = {}) => {
	class WithObserver extends Component {
		constructor(props) {
			super(props);

			this.state = {
				isVisible: false,
			};
		}

		handleIntersection(evt) {
			this.setState({ isVisible: evt.isIntersecting });
		}

		render() {
			return (
				<Observer
					onChange={(evt) => this.handleIntersection(evt)}
					root={options.root || 'body'}
				>
					<WrappedComponent {...this.props} isVisible={this.state.isVisible}>
						{this.props.children}
					</WrappedComponent>
				</Observer>
			);
		}
	}

	WithObserver.propTypes = {
		children: PropTypes.any,
	};

	return WithObserver;
};

