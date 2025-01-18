const modalControl = () => {
	const socialNetwork = document.querySelector('.digitalcardheader-socialnetwork');
	const appSharing = document.querySelector('.digitalcardshare-downloadplatform');
	const closeIcon = document.querySelector('.digitalcardshare-close');

	if (closeIcon) {
		appSharing.style.display = 'none';
		socialNetwork.style.display = 'none';
	} else {
		appSharing.style.display = 'block';
		socialNetwork.style.display = 'block';
	}
};

const clickCloseElements = document.querySelectorAll(
	'.digitalcardshare-close, .digitalcardshare-downloadplaform, .digitalcardheader-socialnetwork'
);
clickCloseElements.forEach((element) => {
	element.addEventListener('click', () => {
		modalControl();
	});
});
