let value = 0;
const counterValue = document.querySelector("span#value");

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};
const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
