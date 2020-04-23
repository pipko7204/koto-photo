// title and description

let title = document.querySelector('.title').children;
title[0].textContent = catGallery.title;

let aboutCat = document.querySelector('.aboutCat').children;
aboutCat[0].textContent = catGallery.aboutCat;

// photos

let photoSpace = document.querySelector('.allPhoto');
let catPhotoCards = catGallery.photoCards;

let catPhoto = function(catCard) {
    let photo = document.createElement('img');
    photo.className = "catPhoto";
    photoSpace.appendChild(photo);
    photo.src = catCard.path;
};

for ( let i = 0; i < catPhotoCards.length; i++) {
   catPhoto(catPhotoCards[i])
}

let catPhotos = document.querySelectorAll('.catPhoto');

// links
let sidebar = document.querySelector('.sidebar');
let links = catGallery.links;

let createLink = function(linkObj) {
    let link = document.createElement('a');
    link.href = linkObj.link;
    link.innerHTML = "<p>" + linkObj.linkText + "</p>";

    sidebar.appendChild(link);
}

for (let i = 0; i < links.length; i++) {
    createLink(links[i])
}

console.log(sidebar.children)
console.log(links)


