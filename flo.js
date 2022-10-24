export const calcBtnFlo = document.getElementById("applyBtn-flo");
export const discPriceFlo = document.getElementById("discounted-price-flo");
export const regularPriceFlo = document.getElementById("regular-price-flo");
export const inputPriceFlo = document.getElementById("input-price-flo");
export const sellingPriceFlo = document.getElementById("selling-price-flo");

export function applyDiscFlo() {
  const inputValue = inputPriceFlo.value;
  regularPriceFlo.innerText = inputValue + "" + "€";
  const disc1 = Math.ceil(inputValue - (68 / 100) * inputValue);
  const sell = Math.ceil(disc1 + (40 / 100) * disc1);

  discPriceFlo.innerText = disc1 + "" + "€";
  sellingPriceFlo.innerText = sell + "" + "€";
}
