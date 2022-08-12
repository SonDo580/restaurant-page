const contentDiv = document.querySelector('#content');

function showHome() {
    contentDiv.appendChild(home);
}

function showMenu() {
    contentDiv.appendChild(menu);
}

function showContact() {
    contentDiv.appendChild(contact);
}

export { showHome, showMenu, showContact };