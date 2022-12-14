export const calcBtnIml = document.getElementById("applyBtn-iml");
export const discPriceIml = document.getElementById("discounted-price-iml");
export const regularPriceIml = document.getElementById("regular-price-iml");
export const inputPriceIml = document.getElementById("input-price-iml");
export const sellingPriceIml = document.getElementById("selling-price-iml");

export function applyDiscIml() {
  const inputValue = inputPriceIml.value;
  regularPriceIml.innerText = inputValue + "" + "€";
  const disc1 = (50 / 100) * inputValue;
  const disc2 = disc1 - (10 / 100) * disc1;
  const disc3 = disc2 - (10 / 100) * disc2;
  const disc4 = disc3 - (10 / 100) * disc3;
  const disc5 = disc4 - (10 / 100) * disc4;
  const disc6 = disc5 - (5 / 100) * disc5;
  const sell = disc6 + (45 / 100) * disc6;
  console.log(disc1, disc2, disc3, disc4, disc5, disc6, sell);

  discPriceIml.innerText = Math.ceil(disc6) + "" + "€";
  sellingPriceIml.innerText = Math.ceil(sell) + "" + "€";
}
