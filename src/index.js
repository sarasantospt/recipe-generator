function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "1 cup of brown sugar",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
