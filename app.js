const calcBtn = document.getElementById("applyBtn");
const discPrice = document.getElementById("discounted-price");
const regularPrice = document.getElementById("regular-price");
const inputPrice = document.getElementById("input-price");

calcBtn.onclick = () => {
  const inputValue = inputPrice.value;
  regularPrice.innerText = inputValue;
  const disc1 = (50 / 100) * inputValue;
  const disc2 = (10 / 100) * disc1 - disc1;
  const disc3 = (10 / 100) * disc2 - disc2;
  const disc4 = (10 / 100) * disc3 - disc3;
  const disc5 = (10 / 100) * disc4 - disc4;

  discPrice.innerText = Math.ceil(disc5);
};
