const inputRef = document.querySelector("input#validation-input");
const inputDataLength = Number(inputRef.dataset.length);
inputRef.addEventListener("input", (event) => {
  if (inputRef.value.length === inputDataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
