{
	const throttle = (type, name, obj) => {
		const newObj = obj || window;
		let running = false;
		const func = () => {
			if (running) {
				return;
			}
			running = true;
			requestAnimationFrame(() => {
				newObj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		newObj.addEventListener(type, func);
	};

	throttle('resize', 'optimizedResize');
}
