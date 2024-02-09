const init = () => {
	if (!document.querySelector('.home')) {
		return;
	}

	// eslint-disable-next-line no-console
	console.log('home init');
};

export default {
	init,
};
