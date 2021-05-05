const inputRef = document.querySelector("input#validation-input");
const inputDataLength = Number(inputRef.dataset.length);
const valid = "valid";
const error = "invalid";

inputRef.addEventListener("input", (event) => {
  if (inputRef.value.length === inputDataLength) {
    updateClass(valid, error);
  } else {
    updateClass(error, valid);
  }
});

function updateClass(addCla, remCla) {
  inputRef.classList.remove(remCla);
  inputRef.classList.add(addCla);
}
