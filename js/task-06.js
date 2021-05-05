const inputRef = document.querySelector("input#validation-input");
const inputDataLength = Number(inputRef.dataset.length);
inputRef.addEventListener("input", (event) => {
  const valid = "valid";
  const error = "invalid";
  if (inputRef.value.length === inputDataLength) {
    inputRef.classList.remove(error);
    inputRef.classList.add(valid);
    return;
  }
  inputRef.classList.remove(valid);
  inputRef.classList.add(error);
});
