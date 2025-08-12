const form = document.querySelector('.login-form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = [...form.elements].filter(element => element.name);

const formData = {};
    for (const element of elements) {
        formData[element.name] = element.value.trim();
    }

    if (elements.some(element => element.value.trim() === '')) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);

    form.reset();
});