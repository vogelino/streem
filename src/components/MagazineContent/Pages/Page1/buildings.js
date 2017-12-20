const patterns = [
	'fiesta.jpg',
	'junk-mail.jpg',
	'retro-furnish.png',
];

const getRandomPattern = () =>
	`url('/images/patterns/${patterns[Math.floor(Math.random() * patterns.length)]}')`;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (((max - min) + 1) + min));
}

function createBuilding(prevBuildings, index) {
	const prevBuilding = prevBuildings[index];
	const height = getRandomInt(50, 300);
	return [
		...prevBuildings,
		{
			height,
			top: ((prevBuilding.top + prevBuilding.height) - height),
			left: prevBuilding.left + 140,
			zIndex: prevBuilding.zIndex,
			delay: getRandomInt(0, 2000),
		},
	];
}

const range = (n) => Array.from(Array(n).keys());

const createBuildingsRange = (nBuildings, defaults) =>
	range(nBuildings).reduce(createBuilding, [{
		height: 0,
		top: 0,
		left: 0,
		zIndex: 1,
		...defaults,
	}]);

export default (() =>
	range(16)
		.reduce((prevBuildings, index) => {
			const top = (index * 49) + 200;
			const xVariability = index % 2 === 0 ? 70 : 0;
			const left = xVariability - 200;
			const newBuildingsRange = createBuildingsRange((13), { top, left });
			return [...prevBuildings, ...newBuildingsRange];
		}, [])
		.filter((b) => b.height !== 0)
		.filter(() => Math.random() > 0.8)
		.map((x) => ({
			...x,
			leftBackground: getRandomPattern(),
			rightBackground: getRandomPattern(),
			topBackground: getRandomPattern(),
		}))
)();
