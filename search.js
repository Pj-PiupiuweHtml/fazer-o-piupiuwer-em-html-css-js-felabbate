/* const searchBar = document.querySelector('#search');

searchBar.addEventListener('input', function(){
    const namesUser = document.querySelectorAll('.piu-name-username');
    const contentUser = document.querySelectorAll('.piu-content');
    for (let i = 0; i < namesUser.length; i++) {
        const userPiu = namesUser[i];
        const contentPiu = contentUser[i];

        const namesFeed = userPiu.querySelector('.name-piu-feed');
        const usersFeed = userPiu.querySelector('.username-piu-feed');
        const contentFeed = contentPiu.querySelector('.piu-text-content');

        const name = namesFeed.textContent;
        const user = usersFeed.textContent;
        const content = contentFeed.textContent;

        const expression = new RegExp(this.value,'i');
        if (expression.test(name) || expression.test(user) || expression.test(content)) {
            userPiu.classList.add('invisible-content');
            contentPiu.classList.add('invisible-content');
        }
        else {
            userPiu.classList.remove('invisible-content');
            contentPiu.classList.remove('invisible-content');
        }
        console.log(this.value);
    }
}) */