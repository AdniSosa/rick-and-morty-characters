const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const charactersList = document.getElementById('character-list');
const charactersAPI = 'https://rickandmortyapi.com/api/character';

function getCharacter() {
    fetch(charactersAPI)
    .then((response) => {
        if(!response.ok) {
            throw new Error('La solicitud no ha sido exitosa')
        }
    })
}

