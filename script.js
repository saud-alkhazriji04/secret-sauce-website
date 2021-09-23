const images = document.getElementsByClassName('image');
const imagesNumber = images.length;
let imagePosition = 0;
images[1].classList.remove('active');

setInterval(function() {
    for(let i = 0; i < imagesNumber; i++) {
        images[i].classList.remove('active')
    }
    if (imagePosition === imagesNumber - 1) {
        imagePosition = 0;
    } else {
        imagePosition++;
    }
    images[imagePosition].classList.add('active')
}, 2500)