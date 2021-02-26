// Input de piu para timeline

const errorMessageSpan = document.querySelector('.error-message')

const inputValidation = () => {
    const form = document.querySelector('.form-piu');

    const piu = form.userPiu.value;

    if (piu.length <= 0) {
        return 'Não é possível enviar pius sem conteúdo!';
    }
    else if (piu.length > 140) {
        return 'Não é possível enviar pius com mais de 140 caracteres!';
    }
    else {
        return false;
    }
}

const submitButton = document.querySelector('.submit-piu');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const form = document.querySelector('.form-piu');

    const conteudoPiu = form.userPiu.value;

    const errorMessage = inputValidation();

    if (inputValidation()) {
        errorMessageSpan.textContent = errorMessage;
        errorMessageSpan.classList.add('card');
        return;
    }

    errorMessageSpan.classList.remove('card');
    errorMessageSpan.textContent = '';

    const timeline = document.querySelector('.timeline-content');
            
    const outsideDiv = document.createElement('div');
    outsideDiv.classList.add('piu-content-outside');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('piu-poster-info');

    const profilePicture = document.createElement('img');
    const pictureLink = document.querySelector('.user-profile-picture')
    profilePicture.src = pictureLink.src;
    profilePicture.alt = 'Foto de Perfil';
    profilePicture.classList.add('profile-picture-feed');
    infoDiv.appendChild(profilePicture);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('piu-details');

    const topDetailsDiv = document.createElement('div');
    topDetailsDiv.classList.add('piu-details-top');

    const nameUserDiv = document.createElement('div');
    nameUserDiv.classList.add('piu-name-username');

    const nomeP = document.createElement('p');
    nomeP.classList.add('generic-name');
    nomeP.classList.add('name-piu-feed');
    nomeP.textContent = "Fernando Labbate";
    nameUserDiv.appendChild(nomeP);

    const userP = document.createElement('p');
    userP.classList.add('generic-username');
    userP.classList.add('username-piu-feed');
    userP.textContent = "@Felabbate";
    nameUserDiv.appendChild(userP);
    topDetailsDiv.appendChild(nameUserDiv);

    /* const comP = document.createElement('p');                GAMBIARRA: tem que arrumar o espaçamento para ficar o mesmo em todos os pius
    comP.classList.add('generic-username');
    comP.textContent = '(comunidade)';
    topDetailsDiv.appendChild(comP); */

    const timeP = document.createElement('p');
    timeP.classList.add('generic-username');
    timeP.textContent = '1s';
    topDetailsDiv.appendChild(timeP);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('piu-content');

    const piuP = document.createElement('p');
    piuP.textContent = conteudoPiu;
    contentDiv.appendChild(piuP);

    detailsDiv.appendChild(topDetailsDiv);
    detailsDiv.appendChild(contentDiv);

    infoDiv.appendChild(detailsDiv);
    outsideDiv.appendChild(infoDiv);

    const reactionDiv = document.createElement('div');
    reactionDiv.classList.add('piu-reaction-bar');

    const reactionGroupDiv = document.createElement('div');
    reactionGroupDiv.classList.add('reaction-group');

    const likeButton = document.createElement('img');
    likeButton.src = 'images/Favorite.svg';
    likeButton.alt = 'Curtir';
    reactionGroupDiv.appendChild(likeButton);

    const likeNum = document.createElement('p');
    likeNum.textContent = 'X';
    reactionGroupDiv.appendChild(likeNum);
    reactionDiv.appendChild(reactionGroupDiv);

    const reactionGroupDiv2 = document.createElement('div');
    reactionGroupDiv2.classList.add('reaction-group');

    const commentButton = document.createElement('img');
    commentButton.src = 'images/Chat_alt_add.svg';
    commentButton.alt = 'Adicionar comentário';
    reactionGroupDiv2.appendChild(commentButton);

    const commentNum = document.createElement('p');
    commentNum.textContent = 'X';
    reactionGroupDiv2.appendChild(commentNum);
    reactionDiv.appendChild(reactionGroupDiv2);

    const reactionGroupDiv3 = document.createElement('div');
    reactionGroupDiv3.classList.add('reaction-group');

    const shareButton = document.createElement('img');
    shareButton.src = 'images/Regroup.svg';
    shareButton.alt = 'Repiuwpar';
    reactionGroupDiv3.appendChild(shareButton);

    const shareNum = document.createElement('p');
    shareNum.textContent = 'X';
    reactionGroupDiv3.appendChild(shareNum);
    reactionDiv.appendChild(reactionGroupDiv3);

    const salvarPiu = document.createElement('img');
    salvarPiu.src = 'images/Bookmark.svg';
    salvarPiu.alt = 'Salvar piu';
    reactionDiv.appendChild(salvarPiu);

    const showCom = document.createElement('p');
    showCom.classList.add('reaction-text');
    showCom.textContent = 'Mostrar Conversa';
    reactionDiv.appendChild(showCom);

    outsideDiv.appendChild(infoDiv);
    outsideDiv.appendChild(reactionDiv);
    timeline.insertBefore(outsideDiv, timeline.firstChild);
})