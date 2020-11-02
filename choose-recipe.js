
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    if (ingredientCheck(bakeryA, recipes[i].ingredients) && ingredientCheck(bakeryB, recipes[i].ingredients)) {
      return recipes[i].name;
    }
  }
}

const ingredientCheck = function (bakery, ingredients) {
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < ingredients.length; j++) {
      if (bakery[i] === ingredients[j]) {
        return true;
      }
    }
  }
  return false;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));