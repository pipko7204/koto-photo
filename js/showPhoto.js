let desc = document.querySelector(".catDescription");

let bigImg = document.getElementsByClassName("bigImg")[0];
let photoCard = document.querySelector(".popup-container");

let showPhotoCard = function (catPhotoCard, catPhotoNumber) {
    catPhotoNumber.addEventListener('click', function () {
        bigImg.src = catPhotoCard.path;
        desc.textContent = catGallery.name + " " + catPhotoCard.description;
        photoCard.classList.toggle('hidden');
    })
};

for (let i = 0; i < catPhotoCards.length; i++) {
    showPhotoCard(catPhotoCards[i], catPhotos[i]);
}

popupWindow('.popup-container', '.close');

