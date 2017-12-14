import React from 'react';
import PropTypes from 'prop-types';

const TitleScreen = ({ onEnterContent }) => (
	<div className="intro-screen">
		Hello World!
		<button onClick={onEnterContent}>Enter content</button>
	</div>
); 

TitleScreen.defaultProps = {
	onEnterContent: () => {},
};

TitleScreen.propTypes = {
	onEnterContent: PropTypes.func,
};

export default TitleScreen;
