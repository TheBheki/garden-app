// Hardcoded values for the season and plant type.
let season = prompt("Please enter a season").toLowerCase(); // TODO: Replace with prompt() to allow user interaction.
let plantType = prompt("Please enter a type of plant").toLowerCase(); // TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice.
let advice = "";

// Conditional statements to determine advice based on the season.
// If the season is "summer" the user is advised to water the plants regularly and provide some shade.
if (season === "summer") {
  advice += "Water your plants regularly and provide some shade.\n";
  // \n used to console.log a second line of the advice based on the plant type.

  // If the season is "winter" the user is advised to protect the plant from frost with covers.
} else if (season === "winter") {
  advice += "Protect your plants from frost with covers.\n";
  // Otherwise if the season is neither "summer" nor "winter" no advise is given.
} else {
  advice += "No advice for this season.\n";
}

// Conditional statements to determine advice based on the plant type.
// If the type of plant is flower, the advise given would be to "use fertiliser to encourage blooms".
if (plantType === "flower") {
  advice += "Use fertiliser to encourage blooms.";
  // Otherwise, if the type of plant is vegetable the user is advised to keep an eye out for pests.
} else if (plantType === "vegetable") {
  advice += "Keep an eye out for pests!";
  // If neither of the plant types meet the criteria, no advise is given.
} else {
  advice += "No advice for this type of plant.";
}

// Log the generated advice to the console.
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
