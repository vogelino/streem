import React from 'react';
import PropTypes from 'prop-types';
import AbsoluteElement from '../DownTown/AbsoluteElement';

const TypoPath = AbsoluteElement('svg');

const PATH_TOTAL_LENGTH = 40037.8671875;

const TypoworldPath = ({ progress }) => (
	<TypoPath
		width="2844.05"
		height="2156"
		viewBox="0 0 2844.05 2156"
		x={59}
		y={-278}
		delay={1600}
	>
		<path
			d="M-526.79-21.38l.3,195.9,258,150-86,49.37-92.2-51.18L-612.51,224.5v100l86,50-86,50,0,200,86,50,172-100V477.58l172-102.44,86,50,0,524.43L-269.18,1049.9l.67-525.4-85.94-49.37-.06,499.37-344,200v100l85.93,50,86.07-50v-100l86,50,84.29-51,1.66,101,430.05-250,170.62,99.2-83,49.8-87.71-49-345.7,199,1.75,101,86,50-.25-101.8,172.25-98.18,86,49.85,85.84-49.84-.42-97.76,86.56-52.21-.57-99.82,86.59,49.8,86,50-86,50-89.39,49.11,3.44,100.87,86-50.14,85.94,50.1,172.24-100-.86,100,86.67,50,86-49.71-169.3-98.72,83.71-51.55-87.08-50-.57,99.1-171.8,1.2,87-50.46-85-49.34,85.07-50.54,85.93-50,86.07-50,86.63,50-.62,60.25,86,50-.06,239.71,86.72,50.25,85.34-50.25v100l172-100-.12-99.81-85.91-50.12-86,49.93-86-50,172-100,172,99.87,86-50.62,171.83-99.08v-220l-86-50-.35,219.59-85.5-49.79,0,99.28-172-98.33-86.57,49.11,172.56,100.86v98.95l86,49.78,86-49.65,86,50v100l86,50,86-50,86,50,171.29-100.38-.24-100.06-171,98.23-86-47.79-86,47.79-82.58-47.23,81.91-50.71-169-98.49,86.13-49.77,83.37-51.39,258.14,149.8,172,100,84-50-170-100,172-100-86.05-50-172.13,100-172-100.4,86.13-49.6,0-200.31,85.93-50.25.12-99.64,86-49.8,86,49.14,86,50.86.05,99.4-86.05,50.64-86-50v298.18l86-48.21v-200l-258-149.64-4,202-168,97.62-.12-120.43-68.89-40,69-39.83V524.66l86,49.57,86-49.73-.17-100,86.18-50,85.36-49.64-.51,99.07,87.14,53.63,86,47-168.54-2.65-4.07-297.34-171.34-100-.73-200.38,86-50,0,200,86.76,50.38s-1.38-100.72-.73-100.36,86.66,50.36,86.66,50.36l-.61,300,81.78,47.22,4.22-396.88L2053-25.59l-.08-100.29-86-50-86.06,50.43-86-50.44-86,50,0,300,86.7,50.39,85.85,50.08-3.92,97.68-82.09-47.69V424.5l-85.83-50,.16-100.61-86-50-.21-299.48-86-50,0,400,86.23,50.23,84.68,49.2,1.13,100.68-86.06,44.25-85.82-44.16-.18-100-85.94-50,.48,101.23-19.06,7.18-66.52-38.64-.9-319.77,85.64,50-2.74,98.37,87-49.64V74.5l-84.24-50.65.32-99.35-86-50,125.06-75.35-83.43-48.52,302.16-176.36,86.23,50.25,85.39-50,86,50,86.06-50-86-50,.57-100.05-86,50-86-50,.06,100-83,48.16-89.35-48.4.24-199.79-85.4,49.84.05,99.9-86.05,50.63,0,95.38-86.56,54.4L1193.49-425.5l-172,100.16,172,100-.6,600.26,86,50,.73,139.67-86.76,45.79,0-135.45-86-50,.7-148-43,25.78v-200l86-50.63-43-27.57V-272.39l-87-51.16,1,198.05-85.43-50V-375.9l-87.14,50.07L763.49-375.5l0,299.72-86,50.59L678,75.1l84.87,49.35L849.49,74.5,936,125.1l-85.77,49.06,85.24,50.34v100l-172-100-85.91,49.69-86.19-50.25.1-599.44L419.54-475.44,247.47-375.5l172,100-.08,500.06,86,50-.55,89.19-11,5.78-246.27-145,0-299.68L-11.08-225.75l-85.45,50.54,258,150.66V374l-86-50,0-100.17-86-49.36,0-200L-97.14-75.57l.65,299.88,86,50.19-.56,200.08-85.75-50.19V321l-86.63,52-85-52.59-.05-295.92-84.37-49-1.51,294.12"
			transform="translate(701.51 678.5)"
			style={{
				fill: 'none',
				stroke: '#ff3636',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 6,
				strokeDasharray: [
					(PATH_TOTAL_LENGTH / 100) * progress,
					PATH_TOTAL_LENGTH,
				].join(' '),
			}}
			ref={(node) => {
				this.path = node;
			}}
		/>
	</TypoPath>
);

TypoworldPath.propTypes = {
	progress: PropTypes.number.isRequired,
};

export default TypoworldPath;