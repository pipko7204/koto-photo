let list = document.querySelector('.comment-container');

let templaate = document.querySelector('#message-template').content;
let textTemplate = templaate.querySelector('.chat-message');

let form = document.querySelector('.input-field');
let textInput = form.querySelector('.chat-form-input');

let messages = list.children;

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let taskText = textInput.value;
    let task = textTemplate.cloneNode(true);
    let taskDesc = task.querySelector('p');
    taskDesc.textContent = taskText;
    deleteMessage(task);
    list.appendChild(task);
    textInput.value = '';
});


let deleteMessage = function (message) {
    let close = message.querySelector('.chat-message-button');
    close.addEventListener('click', function () {
        message.remove();
    });
};


for (let i = 0; i < messages.length; i++) {
    deleteMessage(messages[i]);
}