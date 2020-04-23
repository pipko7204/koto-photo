let popupWindow = function(selector, button) {

    let popupSelector = document.querySelector(selector);
    let popupButton = document.querySelector(button);

    popupButton.onclick = function () {
        popupSelector.classList.toggle('hidden');
    }
};

popupWindow('.entry', '.rightLogo');