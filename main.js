const productCards = document.querySelectorAll(".card");
const changeColorCardAllButton = document.querySelector(
  "#change-cards-color-button",
);

const productCard = document.querySelector(".card");
const changeColorCardButton = document.querySelector(
  "#change-card-color-button",
);

const redColorHash = "#ff0000";
const blueColorHash = "#0000ff";
const yelowColorHash = "#deee00";

console.log("productCards", productCards);
console.log("changeColorCardAllButton", changeColorCardAllButton);

changeColorCardAllButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = redColorHash));
});

changeColorCardButton.addEventListener("click", () => {
  productCard.style.backgroundColor = blueColorHash;
});

const openGoogleButton = document.querySelector("#open-goole-button");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы хотите открыть Google");
  if (answer === true) {
    window.open("https://google.com");
    openGoogleButton.style.backgroundColor = yelowColorHash;
    productCard.style.backgroundColor = yelowColorHash;
  } else {
    return;
  }
}

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("ORDA"));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const hoveringOnTitle = document.querySelector(".title");

hoveringOnTitle.addEventListener("mouseenter", (teg) => {
  console.log(teg.target.textContent);
});

const dynamiсButton = document.querySelector("#dynamiс-button");

dynamiсButton.addEventListener("click", () => {
  dynamiсButton.classList.toggle("active");
});