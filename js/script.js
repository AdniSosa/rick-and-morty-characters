const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const charactersList = document.getElementById('character-list');
const charactersURL = 'https://rickandmortyapi.com/api/character';
const urlButtons = 'https://rickandmortyapi.com/api/character/?page=';
let currentPage = 1;
const totalPages = 42; 

const characters = (page) => {
    fetch( `${urlButtons}${page}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const characters = data.results;
        
        characters.forEach(character => {
                    
            const nameList = document.createElement('li');
            const specieList = document.createElement('li');
            const imgList = document.createElement('img');
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character-div');
            
            charactersList.appendChild(characterDiv);
            characterDiv.appendChild(imgList);
            characterDiv.appendChild(nameList);
            characterDiv.appendChild(specieList);
            
            
            const characterName = character.name;
            const characterSpecie = character.species;
            const characterImg = character.image;
            
            nameList.innerHTML = `<span>Name: </span>${characterName}`;
            specieList.innerHTML = `<span>Specie: </span>${characterSpecie}`;
            imgList.src = characterImg;
            imgList.alt = `Personaje de Rick & Morty: ${characterName}`;
            });
        
    })
    .catch(error => charactersList.textContent = 'Error: No se pudo obtener la información.')           
    
}

window.addEventListener("load", () => {
    characters(currentPage);
  });

nextButton.addEventListener('click', () => {
    if (currentPage >= 1 && currentPage < totalPages) {
        currentPage++;
        console.log(currentPage);
        charactersList.innerHTML = ' ';
        characters(currentPage);
    } else {
        nextButton.disabled = true;
    }
    
})

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        console.log(currentPage);
        charactersList.innerHTML = ' ';
        characters(currentPage);
    } else {
        prevButton.disabled = true;
    }
})


