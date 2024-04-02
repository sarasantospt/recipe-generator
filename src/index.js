function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "aa9affb5f453t7413c8f0o23076a944a";
  let context =
    "You are very passionate master of cooking and love amazing and simple recipes. Your mission is to write delicious, easy to cook recipes in basic HTML. Avoid adding ```html at the beginning of the answer. Please make sure you follow the user instructions. Include a very small title with the dish name that is the same size as the recipe font. Sign the poem with 'Enjoy this delicious food! Happy Cooking/Baking!' inside a <strong> element at the end of the recipe.";
  let prompt = `User instructions: Generate a delicious recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
