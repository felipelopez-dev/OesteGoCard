const buttonShareSocial = () => {
	const buttonShare = document.querySelector('.digitalcardheader-btnshare');
	const shareSocial = document.querySelector('.digitalcard-social');

	if (buttonShare) {
		shareSocial.style.display = 'block';
	} else {
		shareSocial.style.display = 'none';
	}
};

const clickButtonShare = document.querySelector('.digitalcardheader-btnshare');
clickButtonShare.addEventListener('click', () => {
	buttonShareSocial();
});
