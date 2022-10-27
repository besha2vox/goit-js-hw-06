const listRef = document.querySelector('#categories');
const listItemsRefs = listRef.children;

const countListCategories = () => console.log(`Number of categories: ${listRef.childElementCount}`);

countListCategories();

const listItemsElementCount = [...listItemsRefs].forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
