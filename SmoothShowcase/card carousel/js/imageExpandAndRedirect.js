function expandImage(id) {
    let projectElement = document.getElementById(id);
    let imageUrl = projectElement.querySelector('img').src;
    let url = projectElement.getAttribute('data-url');

    let fullscreenContainer = document.getElementById('fullscreen-container');
    let fullscreenImage = document.getElementById('fullscreen-image');

    let rect = projectElement.getBoundingClientRect();

    fullscreenImage.style.top = rect.top + 'px';
    fullscreenImage.style.left = rect.left + 'px';
    fullscreenImage.style.width = rect.width + 'px';
    fullscreenImage.style.height = rect.height + 'px';
    fullscreenImage.src = imageUrl;
    fullscreenImage.style.opacity = 1; // Start at full opacity

    fullscreenContainer.style.display = "flex";

    setTimeout(function() {
        fullscreenImage.style.top = '0px';
        fullscreenImage.style.left = '0px';
        fullscreenImage.style.width = '100vw';
        fullscreenImage.style.height = '100vh';

    }, 100);

    setTimeout(function() {
        window.location.href = url;
    }, 1100);
}
