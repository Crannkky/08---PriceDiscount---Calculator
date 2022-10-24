export const calcBtnAtl = document.getElementById("applyBtn-atl");
export const discPriceAtl = document.getElementById("discounted-price-atl");
export const regularPriceAtl = document.getElementById("regular-price-atl");
export const inputPriceAtl = document.getElementById("input-price-atl");
export const sellingPriceAtl = document.getElementById("selling-price-atl");

export function applyDiscAtl() {
  const inputValue = inputPriceAtl.value;
  regularPriceAtl.innerText = inputValue + "" + "€";
  const disc1 = Math.ceil(inputValue - (55 / 100) * inputValue);
  const disc2 = Math.ceil(disc1 - (19 / 100) * disc1);
  const sell = Math.ceil(disc2 + (40 / 100) * disc2);
  discPriceAtl.innerText = disc2 + "" + "€";
  sellingPriceAtl.innerText = sell + "" + "€";
}
