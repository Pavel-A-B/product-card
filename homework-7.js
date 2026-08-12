const reportWeather = (city, temp) => {
  console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
};

reportWeather("Varkuta", 25);

const LIGHT_SPEED = 299792458;

const checkLight = (v) => {
  if (v > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  }
  if (v < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  }
  if (v === LIGHT_SPEED) {
    console.log("Скорость света");
  }
};

checkLight(300000);

tovar = {
  name: "car",
  summa: (cost = 100),
};

const buyTovar = (cash) => {
  if (cash > cost) {
    console.log(`${tovar.name} приобретён. Спасибо за покупку!`);
  } else if (cash === cost) {
    console.log("А бензин на какие деньги?!!!!!!!!!!!!!!!!!!!!!");
  } else {
    lack = cost - cash;
    console.log(`Вам не хватает ${lack}. Пополните баланс`);
  }
};

buyTovar(88);

const testSumma = (testNumber, testString, testIf) => {
  if (!testIf) console.log(testNumber + testString);
  else console.log(testString + testNumber);
};

testSumma(48, "13", true);