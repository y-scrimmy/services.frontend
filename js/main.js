document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.popup-container');
    var popupButtons = document.querySelectorAll('.open-popup');
    var submitBtn = document.querySelector('.form-submit');

    for(let i = 0; i < popupButtons.length; i++) {
        popupButtons[i].addEventListener('click', function() {
            container.style.display = 'flex';
        });
    }

    container.addEventListener('click', function(event) {
        if(event.target == container) {
            container.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        container.style.display = 'none';
    });
});