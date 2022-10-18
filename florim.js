export const calcBtnFlorim = document.getElementById("applyBtn-florim");
export const discPriceFlorim = document.getElementById(
  "discounted-price-florim"
);
export const regularPriceFlorim = document.getElementById(
  "regular-price-florim"
);
export const inputPriceFlorim = document.getElementById("input-price-florim");

export function applyDiscFlorim() {
  const inputValue = inputPriceFlorim.value;
  regularPriceFlorim.innerText = inputValue;
  const disc1 = inputValue - (68 / 100) * inputValue;

  discPriceFlorim.innerText = Math.ceil(disc1);
}
