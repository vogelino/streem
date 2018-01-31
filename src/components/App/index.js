import React, { Component } from 'react';
import './App.css';
import MagazineContent from '../MagazineContent';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
			page: 'magazine',
		};
	}
	render() {
		const { windowHeight, windowWidth, page } = this.state;
		return (
			<div className="app">
				<div
					className={`page page-magazine ${page === 'magazine' &&
						'page-active'}`}
				>
					<MagazineContent {...{ windowWidth, windowHeight }} />
				</div>
			</div>
		);
	}
}

export default App;
