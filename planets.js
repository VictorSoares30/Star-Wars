let currentPageUrl = 'https://swapi.dev/api/planets/'

window.onload = async () => {
    try {
        await loadPlanets(currentPageUrl);
    } catch (error){
        console.log(error);
        alert('Erro ao carregar cards');
    }

    const nextButton = document.getElementById('next-button')
    nextButton.addEventListener('click', loadNextPage)
    const backButton = document.getElementById('back-button')
    backButton.addEventListener('click', loadPreviousPage)
};

async function loadPlanets(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = '';

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((planet) => {
            const card = document.createElement("div")
            card.style.backgroundImage = 
            `url('https://starwars-visualguide.com/assets/img/planets/${planet.url.replace(/\D/g, "")}.jpg')`
            card.className = "cards"

            const planetNameBg = document.createElement("div")
            planetNameBg.className = "planet-name-bg"

            const planetName = document.createElement("span")
            planetName.className = "planet-name"
            planetName.innerText = `${planet.name}`

            planetNameBg.appendChild(planetName)
            card.appendChild(planetNameBg)

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = 'visible'

                const modalContent = document.getElementById("modal-content")
                modalContent.innerHTML = ''

                const planetImage = document.createElement("div")
                planetImage.style.backgroundImage = 
                `url('https://starwars-visualguide.com/assets/img/planets/${planet.url.replace(/\D/g, "")}.jpg')`
                planetImage.className = "planet-image"
                modalContent.appendChild(planetImage)

                const name = document.createElement("span")
                name.className = "planet-details"
                name.innerText = `Nome: ${planet.name}`

                const rotationPeriod = document.createElement("span")
                rotationPeriod.className = "planet-details"
                rotationPeriod.innerText = `Periodo de rotacao: ${planet.rotation_period}`

                const climate = document.createElement("span")
                climate.className = "planet-details"
                climate.innerText = `Clima: ${planet.climate}`

                const terrain = document.createElement("span")
                terrain.className = "planet-details"
                terrain.innerText = `Terreno: ${planet.terrain}`

                const population = document.createElement("span")
                population.className = "planet-details"
                population.innerText = `Populacao: ${planet.population}`

                modalContent.appendChild(name)
                modalContent.appendChild(rotationPeriod)
                modalContent.appendChild(climate)
                modalContent.appendChild(terrain)
                modalContent.appendChild(population)
            }

            mainContent.appendChild(card)
        });

        const nextButton = document.getElementById('next-button');
        const backButton = document.getElementById('back-button');

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;

        backButton.style.visibility = responseJson.previous? "visible" : "hidden";
        nextButton.style.visibility = responseJson.next? "visible" : "hidden";

        currentPageUrl = url;

    } catch (error) {
        alert('Erro ao carregar os planetas');
        console.log(error);
    }
};

async function loadNextPage() {
    if(!currentPageUrl) return;

    try{
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadPlanets(responseJson.next)

    } catch(error) {
        console.log(error);
        alert('Erro ao carregar a próxima página')
    }
}

async function loadPreviousPage() {
    if(!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadPlanets(responseJson.previous)

    } catch(error) {
        console.log(error)
        alert('Erro ao carregar a pagina anterior')
    }
}

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = "hidden"
}



