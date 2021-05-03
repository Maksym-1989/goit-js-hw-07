const inputRef = document.querySelector("input#name-input");
const spanRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", (event) => {
  if (!inputRef.value) {
    spanRef.textContent = "немедленно введи своё имя";
  } else {
    spanRef.textContent = inputRef.value;
  }
});
