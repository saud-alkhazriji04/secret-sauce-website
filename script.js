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

/*
----
drop down nav
----
*/
const nav = document.getElementById('drop-down_nav');
document.getElementById('drop-down').addEventListener('click', function() {
    if (nav.classList.contains('side-bar')) {
        nav.classList.remove('side-bar');
        nav.classList.add('side-bar_active');
        console.log('drop')
    } else {
        nav.classList.remove('side-bar_active');
        nav.classList.add('side-bar');
    }
})