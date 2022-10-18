export const calcBtnAtlas = document.getElementById("applyBtn-atlas");
export const discPriceAtlas = document.getElementById("discounted-price-atlas");
export const regularPriceAtlas = document.getElementById("regular-price-atlas");
export const inputPriceAtlas = document.getElementById("input-price-atlas");
export const sellingPriceAtlas = document.getElementById("selling-price-atlas");

export function applyDiscAtlas() {
  const inputValue = inputPriceAtlas.value;
  regularPriceAtlas.innerText = inputValue;
  const disc1 = Math.ceil(inputValue - (55 / 100) * inputValue);
  const disc2 = Math.ceil(disc1 - (19 / 100) * disc1);
  const sell = Math.ceil((40 / 100) * disc2 + disc2);
  discPriceAtlas.innerText = disc2;
  sellingPriceAtlas.innerText = sell;
}
