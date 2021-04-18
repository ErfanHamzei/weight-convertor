//variables and elements
const poundInput = document.querySelector("#pound");
const gramValue = document.querySelector(".gram-value");
const kiloGramValue = document.querySelector(".kilogram-value");
const ouncesValue = document.querySelector(".ounces-value");

//events
poundInput.addEventListener("input", () => {
  //add a condition to check the box hide class
  poundInput.value && poundInput.value > 0
    ? boxClass("remove")
    : boxClass("add");

  //calculate the values by passing the arguments to the functions
  const gram = calcGram(poundInput.value);
  const kilogram = calcKiloGram(poundInput.value);
  const ounces = calcOunces(poundInput.value);

  //manipulate the DOM with the values
  gramValue.textContent = gram;
  kiloGramValue.textContent = kilogram;
  ouncesValue.textContent = ounces;
});

//functions
function calcKiloGram(pound) {
  return (pound / 2205) * 1000;
}
function calcGram(pound) {
  return (pound / 2205) * 1000 ** 2;
}
function calcOunces(pound) {
  return pound * 16;
}

function boxClass(method) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.classList[method]("hide");
  });
}
