const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

for (const category of categoriesList.children) {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelector('ul').children.length}`);
}