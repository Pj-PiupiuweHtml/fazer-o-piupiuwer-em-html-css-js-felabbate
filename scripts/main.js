// Para popular o feed com os dados da API
let arrayCounter = 0;

const makeRequest = async(url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();
        data.forEach(item => {
            arrayCounter++;

            const timeline = document.querySelector(".timeline-content");
            
            const outsideDiv = document.createElement("div");
            outsideDiv.classList.add("piu-content-outside");

            const infoDiv = document.createElement("div");
            infoDiv.classList.add("piu-poster-info");

            const profilePicture = document.createElement("img");
            item.imagem ? (profilePicture.src = item.imagem) : (profilePicture.src="images/avatar.svg");
            profilePicture.alt="Foto de Perfil";
            profilePicture.classList.add("profile-picture-feed");
            infoDiv.appendChild(profilePicture);

            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("piu-details");

            const topDetailsDiv = document.createElement("div");
            topDetailsDiv.classList.add("piu-details-top");

            const nameUserDiv = document.createElement("div");
            nameUserDiv.classList.add("piu-name-username");

            const nomeP = document.createElement("p");
            nomeP.classList.add("generic-name");
            nomeP.textContent = item.nome;
            nameUserDiv.appendChild(nomeP);

            const userP = document.createElement("p");
            userP.classList.add("generic-username");
            userP.textContent = item.username;
            nameUserDiv.appendChild(userP);
            topDetailsDiv.appendChild(nameUserDiv);

            /* const comP = document.createElement("p");                GAMBIARRA: tem que arrumar o espaçamento para ficar o mesmo em todos os pius
            comP.classList.add("generic-username");
            comP.textContent="(comunidade)";
            topDetailsDiv.appendChild(comP); */

            const timeP = document.createElement("p");
            timeP.classList.add("generic-username");
            timeP.textContent = `${arrayCounter} min`;
            topDetailsDiv.appendChild(timeP);

            const contentDiv = document.createElement("div");

            const piuP = document.createElement("p");
            piuP.textContent = item.mensagem;
            contentDiv.appendChild(piuP);

            detailsDiv.appendChild(topDetailsDiv);
            detailsDiv.appendChild(contentDiv);

            infoDiv.appendChild(detailsDiv);
            outsideDiv.appendChild(infoDiv);

            const reactionDiv = document.createElement("div");
            reactionDiv.classList.add("piu-reaction-bar");
        
            const reactionGroupDiv = document.createElement("div");
            reactionGroupDiv.classList.add("reaction-group");
        
            const likeButton = document.createElement("img");
            likeButton.src="images/Favorite.svg";
            likeButton.alt="Curtir";
            likeButton.classList.add("btnFavorite");
            reactionGroupDiv.appendChild(likeButton);
        
            const likeNum = document.createElement("p");
            likeNum.textContent = parseInt(10*Math.random());
            likeNum.classList.add("favorite-counter");
            reactionGroupDiv.appendChild(likeNum);
            reactionDiv.appendChild(reactionGroupDiv);
        
            const reactionGroupDiv2 = document.createElement("div");
            reactionGroupDiv2.classList.add("reaction-group");
        
            const commentButton = document.createElement("img");
            commentButton.src="images/Chat_alt_add.svg";
            commentButton.alt="Adicionar comentário";
            reactionGroupDiv2.appendChild(commentButton);
        
            const commentNum = document.createElement("p");
            commentNum.textContent = parseInt(10*Math.random());
            reactionGroupDiv2.appendChild(commentNum);
            reactionDiv.appendChild(reactionGroupDiv2);
        
            const reactionGroupDiv3 = document.createElement("div");
            reactionGroupDiv3.classList.add("reaction-group");
        
            const shareButton = document.createElement("img");
            shareButton.src="images/Regroup.svg";
            shareButton.alt="Repiuwpar";
            reactionGroupDiv3.appendChild(shareButton);
        
            const shareNum = document.createElement("p");
            shareNum.textContent = parseInt(10*Math.random());
            reactionGroupDiv3.appendChild(shareNum);
            reactionDiv.appendChild(reactionGroupDiv3);
        
            const salvarPiu = document.createElement("img");
            salvarPiu.src="images/Bookmark.svg";
            salvarPiu.alt="Salvar piu";
            salvarPiu.classList.add("btnBookmark");
            reactionDiv.appendChild(salvarPiu);
        
            const showCom = document.createElement("p");
            showCom.classList.add("reaction-text");
            showCom.textContent="Mostrar Conversa";
            reactionDiv.appendChild(showCom);

            outsideDiv.appendChild(infoDiv);
            outsideDiv.appendChild(reactionDiv);
            timeline.appendChild(outsideDiv);
        });
        handleFavorite();
        handleBookmark();
    }
    catch (error) {
        console.log(error);
    }
}

makeRequest("https://next.json-generator.com/api/json/get/EkyZfHLU_")