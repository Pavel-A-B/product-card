import productList from "./productList.js";

const getQuantityCards = () => {
  let quantity = +prompt(
    "Сколько карточек вывести? (Введите число от 1 до 5)",
    "3",
  );
  while (isNaN(quantity) || quantity < 1 || quantity > 5) {
    quantity = +prompt(
      "Некорректный ввод. Используйте ТОЛЬКО ЦИФРЫ от 1 до 5",
      "3",
    );
  }
  return quantity;
};

const limit = getQuantityCards();
const productTemplate = document.getElementById("products-item-template");
const productTemplateList = document.querySelector(".products");
const commonImgPath = "/assets/";

const getProductList = () => {
  productList.slice(0, limit).forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);
    console.log(productClone);
    productClone.querySelector(".card__img").src = commonImgPath + product.img;
    productClone.querySelector(".card__specific").textContent =
      product.specific;
    productClone.querySelector(".card__name").textContent = product.name;
    productClone.querySelector(".card__description p").textContent =
      product.description;
    const compounds = productClone.querySelector(".compound__list");
    product.compoundList.forEach((compound) => {
      const compound__li = document.createElement("li");
      compound__li.textContent = compound;
      compounds.appendChild(compound__li);
    });
    productClone.querySelector(".card__price span").textContent = product.price;
    productTemplateList.appendChild(productClone);
  });
};

getProductList(limit);

const titleDiscriptionArray = productList.reduce((acc, productList) => {
  acc.push({ [productList.name]: productList.description });
  return acc;
}, []);
console.log(titleDiscriptionArray);