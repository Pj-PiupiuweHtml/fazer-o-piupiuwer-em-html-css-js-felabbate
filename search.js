const searchBar = document.querySelector('#search');

searchBar.addEventListener('input', function(){
    const namesUser = document.querySelectorAll('.piu-name-username');
    for (let i = 0; i < namesUser.length; i++) {
        const userPiu = namesUser[i];
        const namesFeed = userPiu.querySelector('.name-piu-feed');
        const usersFeed = userPiu.querySelector('.username-piu-feed');
        const name = namesFeed.textContent;
        const user = usersFeed.textContent;
        console.log(user);
    }
})

const namesFeed = document.querySelector('.name-piu-feed');
const name = namesFeed.textContent;