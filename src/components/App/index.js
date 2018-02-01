import React from 'react';
import styled from 'styled-components';
import './App.css';
import MagazineContent from '../MagazineContent';

const Page = styled.div`
	width: 1440px;
	height: 800px;
	position: absolute;
	left: 0;
	top: 0;
`;

export default () => (
	<div className="app">
		<Page>
			<MagazineContent
				windowWidth={1440}
				windowHeight={800}
			/>
		</Page>
	</div>
);

