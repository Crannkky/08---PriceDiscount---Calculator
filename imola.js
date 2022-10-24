export const calcBtnImola = document.getElementById("applyBtn-imola");
export const discPriceImola = document.getElementById("discounted-price-imola");
export const regularPriceImola = document.getElementById("regular-price-imola");
export const inputPriceImola = document.getElementById("input-price-imola");
export const sellingPriceImola = document.getElementById("selling-price-imola");

export function applyDiscImola() {
  const inputValue = inputPriceImola.value;
  regularPriceImola.innerText = inputValue + "" + "€";
  const disc1 = (50 / 100) * inputValue;
  const disc2 = disc1 - (10 / 100) * disc1;
  const disc3 = disc2 - (10 / 100) * disc2;
  const disc4 = disc3 - (10 / 100) * disc3;
  const disc5 = disc4 - (10 / 100) * disc4;
  const disc6 = disc5 - (5 / 100) * disc5;
  const sell = disc6 + (45 / 100) * disc6;
  console.log(disc1, disc2, disc3, disc4, disc5, disc6, sell);

  discPriceImola.innerText = Math.ceil(disc6) + "" + "€";
  sellingPriceImola.innerText = Math.ceil(sell) + "" + "€";
}
