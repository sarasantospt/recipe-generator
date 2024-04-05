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
    "You are very passionate master of cooking and love amazing and simple recipes. Your mission is to write delicious, easy to cook and follow recipes. The recipes need to be provided in HTML. The title of the recipe needs to be a <h2> with green color. Include a <h4> with green color with the word Ingredients:. Below Ingredients, include a list using <ul>. Inside the list, add the ingredients to the recipe using measurements and multiple <li> elements. Below this list, include a <h4> with green color with the word Instructions:. Below Instructions, include a list using <ul>. Inside the list, add the instructions to cook the recipe using measurements and multiple <li> elements. Below Sign the poem with 'Enjoy! Happy Cooking or Baking!' inside a <strong> element at the end of the recipe.";
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
