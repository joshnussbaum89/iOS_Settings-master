
const search = document.querySelector('.search');

search.addEventListener('click', function () {

    document.querySelector('.search-icon').style.visibility = 'hidden';
    document.querySelector('.mic-icon').style.visibility = 'hidden';
    search.addEventListener('click', function () {
        document.querySelector('.search-icon').style.visibility = 'visible';
        document.querySelector('.mic-icon').style.visibility = 'visible';
    })

});