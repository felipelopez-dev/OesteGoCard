const modalControl = () => {
	const socialNetwork = document.querySelector('.digitalcard-social');
	const appSharing = document.querySelector('.digitalcard-down');
	const closeIcon = document.querySelector('.digitalcard--areaclose');

	if (closeIcon) {
		appSharing.style.display = 'none';
		socialNetwork.style.display = 'none';
	} else {
		appSharing.style.display = 'block';
		socialNetwork.style.display = 'block';
	}
};

const clickCloseElements = document.querySelectorAll('.digitalcard--areaclose, .digitalcard-down, .digitalcard-social');
clickCloseElements.forEach((element) => {
	element.addEventListener('click', () => {
		modalControl();
	});
});
