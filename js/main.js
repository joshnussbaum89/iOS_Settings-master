const search = document.querySelector('#search');

// Hide search icons when focused
search.addEventListener('focusin', () => {
    document.querySelector('.search-icon').classList.toggle('hide-content');
    document.querySelector('.mic-icon').classList.toggle('hide-content');
});

// Show search icons when not in focus
search.addEventListener('focusout', function () {
    document.querySelector('.search-icon').classList.toggle('hide-content');
    document.querySelector('.mic-icon').classList.toggle('hide-content');
});