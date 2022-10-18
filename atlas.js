export const calcBtnAtlas = document.getElementById("applyBtn-atlas");
export const discPriceAtlas = document.getElementById("discounted-price-atlas");
export const regularPriceAtlas = document.getElementById("regular-price-atlas");
export const inputPriceAtlas = document.getElementById("input-price-atlas");

export function applyDiscAtlas() {
  const inputValue = inputPriceAtlas.value;
  regularPriceAtlas.innerText = inputValue;
  const disc1 = inputValue - (55 / 100) * inputValue;
  const disc2 = disc1 - (19 / 100) * disc1;

  discPriceAtlas.innerText = Math.ceil(disc2);
}
