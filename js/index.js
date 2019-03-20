// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

 
 // This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  // Show or hide each mushroom depending on the state
  // We iterate over all elements with the class "mushroom"
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    // Visibility reflects the value of state.mushrooms
    oneMushroom.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  // Iterate through all the green pepper elements
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    // Toggle their visibility based on state.greenPeppers
    onePepper.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // Grab the sauce section of the pizza
  const sauce = document.querySelector('.sauce');
  // Add or remove the white sauce class according to the state
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // Select the crust element of the pizza
  const crust = document.querySelector('.crust');
  // Toggle the gluten-free class based on the state
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // Reflect the current state on each control button
  document.querySelector('.btn-pepperoni').classList.toggle('active', state.pepperoni);
  document.querySelector('.btn-mushrooms').classList.toggle('active', state.mushrooms);
  document.querySelector('.btn-green-peppers').classList.toggle('active', state.greenPeppers);
  document.querySelector('.btn-sauce').classList.toggle('active', state.whiteSauce);
  document.querySelector('.btn-crust').classList.toggle('active', state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Start from the base price of the pizza
  let total = basePrice;
  // Reference to the price list in the DOM
  const list = document.querySelector('.panel.price ul');
  // Clear the list to rebuild it based on the current state
  list.innerHTML = '';

  // Iterate over each ingredient to check if it is selected
  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      // Update total price with the ingredient's price
      total += ingredients[ingredient].price;
      // Create a list item describing the ingredient and its price
      const li = document.createElement('li');
      li.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      list.appendChild(li);
    }
  }

  // Display the final calculated price in the DOM
  document.querySelector('.panel.price strong').textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// When clicked, toggle the mushrooms state and re-render
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Toggle green peppers visibility and update the view
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Switch between regular and white sauce when the button is pressed
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
// Toggle the crust between regular and gluten-free
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});