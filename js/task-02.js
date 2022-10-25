const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const createListItems = (array) => {
    return array.map((name) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.classList.add('item');
        return listItem;
    });
};

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(...createListItems(ingredients));
