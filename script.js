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
    } else {
        nav.classList.remove('side-bar_active');
        nav.classList.add('side-bar');
    }
})


//i gave all the prices the same id which will not work so i need to figure out another way

//maybe i can get the meal && burger class store it in an array check which index was  
//clicked then check the price array, and when they match apply the change

const priceEl = document.getElementsByClassName('price');
const buttonsEl = document.getElementsByClassName('meal-burger-btn');

function burgerPrice() {
    document.getElementBy('price').textContent = '1.8 bd';
}

function mealPrice() {
    document.getElementById('price').textContent = '2.3 bd';
}

priceEl[0].id = 'hello-my-man';
console.log(priceEl[0])

















/*
function burgerPrice() {
    document.getElementBy('price').textContent = '1.8 bd';
}

function mealPrice() {
    document.getElementById('price').textContent = '2.3 bd';
}
*/