export const calcBtnDes = document.getElementById("applyBtn-des");
export const discPriceDes = document.getElementById("discounted-price-des");
export const regularPriceDes = document.getElementById("regular-price-des");
export const inputPriceDes = document.getElementById("input-price-des");
export const sellingPriceDes = document.getElementById("selling-price-des");

export function applyDiscDes() {
  const inputValue = inputPriceDes.value;
  regularPriceDes.innerText = inputValue + "" + "€";
  const disc1 = inputValue - (25 / 100) * inputValue;
  const sell = disc1 + (40 / 100) * disc1;

  discPriceDes.innerText = Math.ceil(disc1) + "" + "€";
  sellingPriceDes.innerText = Math.ceil(sell) + "" + "€";
}
