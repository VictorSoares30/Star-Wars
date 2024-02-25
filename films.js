const films = [
    {
        title: 'A New Hope',
        episode_id: 'Episodio 4',
        poster: 'url(https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg)',
        director: 'Geroge Lucas',
        release: '25/05/1977',
    },
    {
        title: 'The Empire Strikes Back',
        episode_id: 'Episodio 5',
        poster: 'url(https://m.media-amazon.com/images/I/61mVAe9vAtL.jpg)',
        director: 'irvin Kershner',
        release: '17/05/1980',
    },
    {
        title: 'Return of the Jedi',
        episode_id: 'Episodio 6',
        poster: 'url(https://m.media-amazon.com/images/I/61c7U8DqV3L._AC_UF894,1000_QL80_.jpg)',
        director: 'Richard Marquand',
        release: '25/02/1983',
    },
    {
        title: 'The Phantom Menace',
        episode_id: 'Episodio 1',
        poster: 'url(https://m.media-amazon.com/images/I/71n0i1MoxJL._AC_UF894,1000_QL80_.jpg)',
        director: 'Geroge Lucas',
        release: '19/05/1999',
    },
    {
        title: 'Atack of the Clones',
        episode_id: 'Episodio 2',
        poster: 'url(https://m.media-amazon.com/images/I/61nFfWio-sL._AC_UF894,1000_QL80_.jpg)',
        director: 'Geroge Lucas',
        release: '16/05/2002',
    },
    {
        title: 'Revenge of the Sity',
        episode_id: 'Episodio 3',
        poster: 'url(https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_UF894,1000_QL80_.jpg)',
        director: 'Geroge Lucas',
        release: '19/05/2005',
    }
];

window.onload = async() => {
    try {
         await renderFilmsCards();
    } catch(error) {
        console.log(error);
        alert('Erro ao carrregar os cards');
    }
};

function renderFilmsCards() {
    try {
        films.forEach((film) => {

            const mainContent = document.getElementById('main-content');
            const card = document.createElement('div')
            card.className = 'cards'
            card.style.backgroundImage = `${film.poster}`
            const filmNameBg = document.createElement('div')
            filmNameBg.className = 'film-name-bg'
            const filmName = document.createElement('span')
            filmName.className = 'film-name'
            filmName.innerText = `${film.title}`

            filmNameBg.appendChild(filmName)
            card.appendChild(filmNameBg)

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = 'visible'
                const modalContent = document.getElementById('modal-content')
                modalContent.innerHTML = ''

                const name = document.createElement('span')
                name.className = 'films-details'
                name.innerText = `${film.title}`

                const episodeId = document.createElement('span')
                episodeId.className = 'films-details'
                episodeId.innerText = `${film.episode_id}`

                const director = document.createElement('span')
                director.className = 'films-details'
                director.innerText = `Diretor: ${film.director}`

                const releaseDate = document.createElement('span')
                releaseDate.className = 'films-details'
                releaseDate.innerText = `Lancamento: ${film.release}`

                modalContent.appendChild(name)
                modalContent.appendChild(episodeId)
                modalContent.appendChild(director)
                modalContent.appendChild(releaseDate)
            }
            mainContent.appendChild(card)
        });

    } catch(error) {
        console.log(error)
        alert('Erro ao carregar informações adicionais')
    }
}

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = 'hidden'
}

