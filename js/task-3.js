const inputElement = document.querySelector('#name-input');

const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
        outputElement.textContent = 'Anonymous';
    } else {
        outputElement.textContent = event.target.value.trim();
    }
});