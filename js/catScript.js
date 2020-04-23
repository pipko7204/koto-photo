
let photos = document.querySelector('.allPhoto').children;
let src = [];

for (let i = 0; i < photos.length; i++) {
    src[i] = photos[i].src
}

let list = document.querySelectorAll('.catPhoto');
let full = document.querySelector('.bigImg');

console.log(list)

let bigPhoto = function (list, photoSrc) {
    list.addEventListener('click', function () {
        full.src = photoSrc;
    });
};

for (let i = 0; i < src.length; i++) {
    bigPhoto(list[i], src[i]);
}