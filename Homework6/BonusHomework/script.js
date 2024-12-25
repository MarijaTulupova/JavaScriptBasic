const recipe = document.getElementById("recipe");
const number = document.getElementById("number");
const saveBtn = document.getElementById("saveBtn");
const nameOfRecipe = document.getElementById("nameOfRecipe");
const ingredientsList = document.getElementById("ingredientsList");
const ingredientCount = document.getElementById("ingredientCount");
const text = document.getElementById("text");

saveBtn.addEventListener("click", function () {
  const ingredientsText = text.value.trim();
  const ingredientsArray = ingredientsText.split("\n");

  if (ingredientsArray.length !== parseInt(number.value)) {
    alert(`Please enter exactly ${number.value} ingredients.`);
    return;
  }

  nameOfRecipe.innerText = `Name of the recipe is ${recipe.value}`;
  ingredientCount.innerText = `Number of ingredients:${number.value}`;

  ingredientsList.innerHTML = "";

  for (let i = 0; i < ingredientsArray.length; i++) {
    const ingredient = ingredientsArray[i].trim();

    if (ingredient !== "") {
      const li = document.createElement("li");
      li.innerText = ingredient;
      ingredientsList.appendChild(li);
    }
  }
});
