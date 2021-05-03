const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  ulRef.appendChild(liRef);
});
