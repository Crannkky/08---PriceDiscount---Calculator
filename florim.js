export const calcBtnFlorim = document.getElementById("applyBtn-florim");
export const discPriceFlorim = document.getElementById(
  "discounted-price-florim"
);
export const regularPriceFlorim = document.getElementById(
  "regular-price-florim"
);
export const inputPriceFlorim = document.getElementById("input-price-florim");
export const sellingPriceFlorim = document.getElementById(
  "selling-price-florim"
);

export function applyDiscFlorim() {
  const inputValue = inputPriceFlorim.value;
  regularPriceFlorim.innerText = inputValue;
  const disc1 = Math.ceil(inputValue - (68 / 100) * inputValue);
  const sell = Math.ceil((40 / 100) * disc1 + disc1);

  discPriceFlorim.innerText = disc1;
  sellingPriceFlorim.innerText = sell;
}
