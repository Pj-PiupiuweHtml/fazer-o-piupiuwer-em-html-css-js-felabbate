// função para popular o feed com os dados da API

const makeRequest = async(url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();
        data.forEach(item => {
            const timeline = document.querySelector('.timeline-content');
            
            const outsideDiv = document.createElement('div');
            outsideDiv.classList.add('piu-content-ouside');

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('piu-poster-info');

            const profilePicture = document.createElement('img');
            item.imagem ? (profilePicture.src = item.imagem) : (profilePicture.src = 'images/avatar.svg');
            profilePicture.alt = 'Foto de Perfil';
            profilePicture.classList.add('profile-picture-feed');
            infoDiv.appendChild(profilePicture);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('piu-details');

            const topDetailsDiv = document.createElement('div');
            topDetailsDiv.classList.add('piu-details-top');

            



            outsideDiv.appendChild(infoDiv);
            timeline.appendChild(outsideDiv);
        });
    }
    catch (error) {
        console.log(error);
    }
}

makeRequest('https://next.json-generator.com/api/json/get/EkyZfHLU_')