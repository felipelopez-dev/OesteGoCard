const buttonAppOeste = () => {
    const appOesteGo = document.querySelector('.digitalcardshare--btnoestego');
    const downloadApp = document.querySelector('.digitalcardshare-downloadplatform');

    if(appOesteGo) {
        downloadApp.style.display = 'block';
    } else {
        downloadApp.style.display = 'none';
    }
}

const clickAppOeste = document.querySelector('.digitalcardshare--btnoestego');
clickAppOeste.addEventListener('click', () => {
    buttonAppOeste();
});