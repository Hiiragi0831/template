const init = () => {
	if (!document.querySelector('.article')) {
		return;
	}

	// eslint-disable-next-line no-console
	console.log('article init');
};

export default {
	init,
};
