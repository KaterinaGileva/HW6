const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Напиши скрипт, который для каждого элемента массива ingredients:

//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.
const ulIng = document.querySelector("ul");
const elements = [];
for (let i = 0; i < ingredients.length; i += 1){
  const ing = ingredients[i];
  const liIng = document.createElement('li');
  liIng.textContent = ing;
  liIng.classList.add('item');
  elements.push(liIng);
}
ulIng.append(...elements);
console.log(ulIng);