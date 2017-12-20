const patterns = [
	'ahoy.jpg',
	'brijan.gif',
	'fiesta.jpg',
	'geometrica.png',
	'green-goblin.png',
	'guglieri-speciale.jpg',
	'junk-mail.jpg',
	'leather-nunchuck.png',
	'retro-furnish.png',
	'science.png',
	'shattered-island.gif',
	'wild-sea.png',
];

const getRandomPattern = () =>
	`url('/images/patterns/${patterns[Math.floor(Math.random() * patterns.length)]}')`;

export default [
	{
		height: 250,
		top: 100,
		left: 0,
		zIndex: 2,
		delay: 0,
		rightLetter: 'S',
	},
	{
		height: 200,
		top: 150,
		left: 140,
		zIndex: 2,
		delay: 100,
		leftLetter: 't',
	},
	{
		height: 100,
		top: 300,
		left: 70,
		zIndex: 3,
		delay: 200,
		topLetter: 'r',
	},
	{
		height: 150,
		top: 250,
		left: 210,
		zIndex: 4,
		delay: 300,
		topLetter: 'e',
	},
	{
		height: 100,
		top: 250,
		left: 280,
		zIndex: 2,
		delay: 400,
		rightLetter: 'e',
	},
	{
		height: 200,
		top: 100,
		left: 350,
		delay: 500,
		leftLetter: 'm',
	},
	/* END OF MAIN BUILDINGS */
	{
		height: 200,
		top: 400,
		left: -150,
		delay: 600,
	},
	{
		height: 150,
		top: 501,
		left: -80,
		delay: 650,
	},
	{
		height: 50,
		width: 200,
		top: 672,
		left: -280,
		delay: 800,
	},
	{
		height: 160,
		top: 541,
		left: -10,
		delay: 700,
	},
	{
		height: 135,
		top: 617,
		left: -80,
		delay: 750,
	},
].map((x) => ({
	...x,
	leftBackground: getRandomPattern(),
	rightBackground: getRandomPattern(),
	topBackground: getRandomPattern(),
}));
