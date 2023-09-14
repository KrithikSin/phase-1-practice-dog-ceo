document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    let breedNames;
    const ul = document.getElementById('dog-breeds');
    // FETCHES
    fetch(imgUrl)
        .then((resp) => resp.json())
        .then((data) =>
            data.message.forEach((dogImage) => renderImage(dogImage))
        );

    fetch(breedUrl)
        .then((resp) => resp.json())
        .then((data) => {
            breedNames = Object.keys(data.message);
            renderList(breedNames);
        });

    // RENDER FUNCTIONS
    function renderImage(dogImage) {
        const container = document.getElementById('dog-image-container');
        const img = document.createElement('img');
        img.src = dogImage;
        container.append(img);
    }

    function renderList(breedNames) {
        breedNames.forEach((breed) => {
            const li = document.createElement('li');
            li.textContent = breed;
            ul.append(li);
            li.addEventListener('click', changeColor);
        });
    }

    // Callback Function
    function changeColor(e) {
        e.target.style.color = 'green';
    }

    // Challenge 4
    const dropdown = document.getElementById('breed-dropdown');

    dropdown.addEventListener('change', handleChange);

    function handleChange(e) {
        const letter = e.target.value;
        const filteredList = breedNames.filter(
            (breedName) =>
                // breedName.startsWith(letter)
                breedName[0] == letter
        );
        ul.textContent = '';
        renderList(filteredList);
    }

    // function filterStartLetter(breedName) {
    //     breedName.startsWith(letter);
    // }
});
