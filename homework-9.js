import exampleOfComments from "./comments.js";

//Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFilter = numbers.filter((number) => number > 5);

//Создать массив строк, относящихся к любой сущности
//(название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const listOfMovies = [
  "Побег из Шоушенка",
  "Зеленая миля",
  "Форрест Гамп",
  "Начало",
  "Интерстеллар",
  "Крёстный отец",
  "Джентльмены",
  "Неприкасаемые",
  "Одержимость",
  "Унесённые призраками",
];

const listOfMoviesIncludes = (movie) => {
  if (typeof movie === "string") {
    return listOfMovies.includes(movie);
  } else {
    return "Неверный формат входных данных";
  }
};

//Написать функцию, которая аргументом будет принимать массив и изменять его порядок на
//противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseFunction = (array) => {
  return array.reverse();
};

reverseFunction(listOfMovies);
reverseFunction(numbers);

//Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const searhMail = exampleOfComments.filter((example) =>
  example.email.includes(".com"),
);

//Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const filterComments = exampleOfComments.map((example) => {
  return {
    ...example,
    postId: example.id <= 5 ? 2 : 1,
  };
});

//Перебрать массив, что бы объекты состояли только из айди и имени

const simplification = exampleOfComments.map((example) => ({
  id: example.id,
  name: example.name,
}));

//Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body)
//больше 180 символов - устанавливаем true, меньше - false.

const newValidComments = exampleOfComments.map((example) => ({
  ...example,
  isInvalid: example.body.length > 180 ? true : false,
}));

//Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const arrayEmail = exampleOfComments.map((example) => example.email);

console.log(arrayEmail);

const reduceEmail = exampleOfComments.reduce((acc, example) => {
  acc.push(example.email);
  return acc;
}, []);

console.log(reduceEmail);

//Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const toString = reduceEmail.toString();

const joinArray = arrayEmail.join(" -- ");
