const inputElement = document.querySelector('#name-input');

const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
    outputElement.textContent = event.target.value.trim();
});