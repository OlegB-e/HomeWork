//1.Создаю несколько объектов с любимой едой.
let dish1 = {
  name: 'Буззы',
  ingredients: ['Мясо', 'Тесто', 'Лук'],
  cost: 500, // стоимость ингредиентов
  price: 100 // цена продажи за 1 штуку
};

let dish2 = {
  name: 'Рыбный суп',
  ingredients: ['рыба', 'овощи', 'лапша'],
  cost: 300, // стоимость ингредиентов
  price: 600 // цена продажи
};
let dish3 = {
  name: 'Пицца пеперони',
  ingredients: [],
  cost: 300, // стоимость ингредиентов
  price: 600 // цена продажи
};

//2.Создаем массив из этих объектов.
let menu = [dish1, dish2, dish3];

//3.Удаляем одно блюдо из массива еды.
let removedDish1 = menu.pop();

//4.Удаляем один ингрдиент из блюда, если он не пуст.
if (removedDish1.ingredients.length > 0) {
  removedDish1.ingredients.pop();
};
//6.Считаем сколько мы заработаем на проданном блюде.
menu.forEach(dish => {
  let profit = dish.price - dish.cost;
  console.log(`Прибыль с блюда "${dish.name}": ${profit} рублей`);
});

//7.Удаляем все элементы из массива кроме одного
menu.splice(1, menu.length - 1);

console.log("Оставшееся меню:");
console.log(menu);
