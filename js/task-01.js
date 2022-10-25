const listRef = document.querySelector('#categories');
const ListItemsRefs = listRef.children;

const countListCategories = () =>
    console.log(`Number of categories: ${listRef.childElementCount}`);

countListCategories();

const listItemsElementCount = [...ListItemsRefs].forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
