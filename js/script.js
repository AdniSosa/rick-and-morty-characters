const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const charactersList = document.getElementById('character-list');
const charactersAPI = 'https://rickandmortyapi.com/api/character';

window.addEventListener('DOMContentLoaded', () => {
    fetch(charactersAPI)
    .then((response) => {
        if(!response.ok) {
            throw new Error('La solicitud no ha sido exitosa')
        }
        return response.json();
    })
    .then((data) => {
        console.log(data.results);
        for (let i = 0; i < data.results.length; i++) {
            charactersList.textContent = data.results[i].name;
        }
        return charactersList;
    })
})
