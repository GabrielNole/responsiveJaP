document.addEventListener('DOMContentLoaded', function () {
    const optionsButton = document.getElementById('optionsButton');
    const optionsMenu = document.getElementById('options-menu');

    optionsButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (optionsMenu.classList.contains('show')) {
            optionsMenu.classList.remove('show');
        } else {
            optionsMenu.classList.add('show');
        }
    });
});






