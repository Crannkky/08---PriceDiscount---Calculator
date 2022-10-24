export const calcBtnImola = document.getElementById("applyBtn-imola");
export const discPriceImola = document.getElementById("discounted-price-imola");
export const regularPriceImola = document.getElementById("regular-price-imola");
export const inputPriceImola = document.getElementById("input-price-imola");
export const sellingPriceImola = document.getElementById("selling-price-imola");

export function applyDiscImola() {
  const inputValue = inputPriceImola.value;
  regularPriceImola.innerText = inputValue;
  const disc1 = (50 / 100) * inputValue;
  const disc2 = (10 / 100) * disc1 - disc1;
  const disc3 = (10 / 100) * disc2 - disc2;
  const disc4 = (10 / 100) * disc3 - disc3;
  const disc5 = (10 / 100) * disc4 - disc4;
  const disc6 = (5 / 100) * disc5 - disc5;
  const sell = (40 / 100) * disc6 + Math.ceil(disc6);

  discPriceImola.innerText = Math.ceil(disc5);
  sellingPriceImola.innerText = Math.ceil(sell);
}
