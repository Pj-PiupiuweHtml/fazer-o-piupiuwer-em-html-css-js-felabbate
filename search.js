const searchBar = document.querySelector('.search-input');

searchBar.addEventListener('input', function(){
    const contentUser = document.querySelectorAll('.piu-content-outside');
    if(searchBar.value.length > 0) {
        for (let i = 0; i < contentUser.length; i++) {
        let userPiu = contentUser[i];

        let name = userPiu.querySelector('.piu-name-username');
        let text = name.textContent;

        let expression = new RegExp(searchBar.value,'i');
        if (!expression.test(text)) {
            userPiu.classList.add('invisible-content');
        }
        else {
            userPiu.classList.remove('invisible-content');
        }}
    } else {
        contentUser.forEach((item) => {
            item.classList.remove('invisible-content');
        })
    }
})

const handleFavorite = () => {
    const favImage = document.querySelectorAll('.btnFavorite');
    console.log(favImage);
    favImage.forEach((item) => {
        console.log('each');
        item.addEventListener('click', () => {
            item.classList.contains('toggleOff')
            ? (item.classList.remove('toggleOff'), item.src='images/Favorite.svg')
            : (item.classList.add('toggleOff'), item.src = 'images/Favorite_full.svg');
        })})
}