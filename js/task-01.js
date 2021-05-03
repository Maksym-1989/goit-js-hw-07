const categoriesRef = document.querySelector("#categories");
const liItemRef = categoriesRef.children;
console.log(`В списке ${liItemRef.length} категории.`);
[...liItemRef].forEach((item) => {
  const h2Ref = item.querySelector("h2");
  const ulRef = item.querySelector("ul");
  console.log(
    `Категория: ${h2Ref.textContent}, Количество элементов: ${ulRef.children.length}`
  );
});
