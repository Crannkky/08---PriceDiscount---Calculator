const calcBtnImola = document.getElementById("applyBtn-imola");
const discPriceImola = document.getElementById("discounted-price-imola");
const regularPriceImola = document.getElementById("regular-price-imola");
const inputPriceImola = document.getElementById("input-price-imola");

calcBtnImola.onclick = () => {
  const inputValue = inputPriceImola.value;
  regularPriceImola.innerText = inputValue;
  const disc1 = (50 / 100) * inputValue;
  const disc2 = (10 / 100) * disc1 - disc1;
  const disc3 = (10 / 100) * disc2 - disc2;
  const disc4 = (10 / 100) * disc3 - disc3;
  const disc5 = (10 / 100) * disc4 - disc4;

  discPriceImola.innerText = Math.ceil(disc5);
};

const calcBtnAtlas = document.getElementById("applyBtn-atlas");
const discPriceAtlas = document.getElementById("discounted-price-atlas");
const regularPriceAtlas = document.getElementById("regular-price-atlas");
const inputPriceAtlas = document.getElementById("input-price-atlas");

calcBtnAtlas.onclick = () => {
  const inputValue = inputPriceAtlas.value;
  regularPriceAtlas.innerText = inputValue;
  const disc1 = inputValue - (55 / 100) * inputValue;
  const disc2 = disc1 - (19 / 100) * disc1;

  discPriceAtlas.innerText = Math.ceil(disc2);
};
