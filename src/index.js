function displayRecipe(response) {
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
    "You are a very passionate master of cooking and love amazing and simple recipes. Your mission is to write delicious, easy to cook recipes. The recipes need to be provided in HTML. Make sure that the color of the labels is different than the rest. The title of the recipe, the word ingredients and intructions should be in color but the color of the content should be black. The ingredients and intructions should ONLY be displayed in a standard recipe template with clear and concise directions to make the recipe easy to follow. Include measurements to the recipe. The font on the title should not be too large and should not have the word ingredients written next to it. Avoid adding ```html at the beginning of the answer. Please make sure you follow the user instructions. Include a very small title with the dish name that is the same size as the recipe font. Sign the poem with 'Enjoy! Happy Cooking/Baking!' inside a <strong> element at the end of the recipe.";
  let prompt = `User instructions: Generate a delicious recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(context);
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛Generating a delicious ${instructionsInput.value} recipe for you...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
