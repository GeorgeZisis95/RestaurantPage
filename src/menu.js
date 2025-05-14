// Step 1: Create the header of the page
const menuHeader = document.createElement("h1")
menuHeader.textContent = "The Enchanted Menu"

// Step 2: Create a container div for each menu part: Bread-Soup-Main-Dessert-Drinks
const breadDiv = document.createElement("div")
const soupDiv = document.createElement("div")
const mainDiv = document.createElement("div")
const dessertDiv = document.createElement("div")
const drinksDiv = document.createElement("div")

// Step 3: Create header for each div
const breadHeader = document.createElement("h2")
breadHeader.textContent = "From the Forest Oven"
const soupHeader = document.createElement("h2")
soupHeader.textContent = "From the Witch's Cauldron"
const mainHeader = document.createElement("h2")
mainHeader.textContent = "Feast of the Kingdom"
const dessertHeader = document.createElement("h2")
dessertHeader.textContent = "Sweet Spell Endings"
const drinksHeader = document.createElement("h2")
drinksHeader.textContent = "Elixirs & Potions"

// There are three options for each menu part
// Each contains a title and a description

// Step 5: Create divs for each option
const breadDishOne = document.createElement("div")
const breadDishTwo = document.createElement("div")
const breadDishThree = document.createElement("div")

const soupDishOne = document.createElement("div")
const soupDishTwo = document.createElement("div")
const soupDishThree = document.createElement("div")

const mainDishOne = document.createElement("div")
const mainDishTwo = document.createElement("div")
const mainDishThree = document.createElement("div")

const dessertDishOne = document.createElement("div")
const dessertDishTwo = document.createElement("div")
const dessertDishThree = document.createElement("div")

const drinksDishOne = document.createElement("div")
const drinksDishTwo = document.createElement("div")
const drinksDishThree = document.createElement("div")

// Step 6: Create each dish and append it to the respective div

// Bread Dishes
const brH1 = document.createElement("h3")
const brT1 = document.createElement("p")

brH1.textContent = "Elven Loaf & Starbutter"
brT1.textContent = "Freshly baked acorn bread served with whipped fae-churned butter."

breadDishOne.appendChild(brH1)
breadDishOne.appendChild(brT1)

const brH2 = document.createElement("h3")
const brT2 = document.createElement("p")

brH2.textContent = "Goblin Garlic Twists"
brT2.textContent = "Twisted breadsticks infused with roasted garlic and nightshade herbs (safe for humans)."

breadDishTwo.appendChild(brH2)
breadDishTwo.appendChild(brT2)

const brH3 = document.createElement("h3")
const brT3 = document.createElement("p")

brH3.textContent = "Moonmelt Brie"
brT3.textContent = "Warm brie wrapped in enchanted fig leaves, drizzled with honeydew nectar."

breadDishThree.appendChild(brH3)
breadDishThree.appendChild(brT3)

// Soup Dishes
const spH1 = document.createElement("h3")
const spT1 = document.createElement("p")

spH1.textContent = "Scrying Stone Soup"
spT1.textContent = "Clear mushroom broth with floating dumplings that reveal your fortune."

soupDishOne.appendChild(spH1)
soupDishOne.appendChild(spT1)

const spH2 = document.createElement("h3")
const spT2 = document.createElement("p")

spH2.textContent = "Trollbone Stew"
spT2.textContent = "A rich root vegetable stew slow-simmered in a smoky cauldron. (No actual trolls were harmed.) "

soupDishTwo.appendChild(spH2)
soupDishTwo.appendChild(spT2)

const spH3 = document.createElement("h3")
const spT3 = document.createElement("p")

spH3.textContent = "Phoenix Ember Bisque"
spT3.textContent = "A spicy firefruit and crab bisque served in a charred spell-bowl."

soupDishThree.appendChild(spH3)
soupDishThree.appendChild(spT3)

// Main Dishes
const mnH1 = document.createElement("h3")
const mnT1 = document.createElement("p")

mnH1.textContent = "Dragonfire Roast"
mnT1.textContent = "Spit-roasted wild boar glazed with dragonfruit and enchanted pepper."

mainDishOne.appendChild(mnH1)
mainDishOne.appendChild(mnT1)

const mnH2 = document.createElement("h3")
const mnT2 = document.createElement("p")

mnH2.textContent = "Knight's Crown Pie"
mnT2.textContent = "Golden-crusted meat and veggie pie with royal rosemary gravy."

mainDishTwo.appendChild(mnH2)
mainDishTwo.appendChild(mnT2)

const mnH3 = document.createElement("h3")
const mnT3 = document.createElement("p")

mnH3.textContent = "Forest Spirit Risotto"
mnT3.textContent = "Creamy arbor rice with forest mushrooms, sage, and moonwine reduction."

mainDishThree.appendChild(mnH3)
mainDishThree.appendChild(mnT3)

// Dessert Dishes
const dsH1 = document.createElement("h3")
const dsT1 = document.createElement("p")

dsH1.textContent = "Pixie Dust Parfait"
dsT1.textContent = "Layers of faerie cream, sugared berries, and sparkling vanilla flakes."

dessertDishOne.appendChild(dsH1)
dessertDishOne.appendChild(dsT1)

const dsH2 = document.createElement("h3")
const dsT2 = document.createElement("p")

dsH2.textContent = "Witch's Apple Tart"
dsT2.textContent = "Caramel-glazed orchard apples baked in a buttery charm crust."

dessertDishTwo.appendChild(dsH2)
dessertDishTwo.appendChild(dsT2)

const dsH3 = document.createElement("h3")
const dsT3 = document.createElement("p")

dsH3.textContent = "Sleeping Beauty's Dreamcake"
dsT3.textContent = "Lavender sponge with clouds of honeyed cream and night-bloom sugar."

dessertDishThree.appendChild(dsH3)
dessertDishThree.appendChild(dsT3)

// The Drinks
const drH1 = document.createElement("h3")
const drT1 = document.createElement("p")

drH1.textContent = "Elven Elixir"
drT1.textContent = "A glowing mint & elderflower tonic said to boost courage."

drinksDishOne.appendChild(drH1)
drinksDishOne.appendChild(drT1)

const drH2 = document.createElement("h3")
const drT2 = document.createElement("p")

drH2.textContent = "Goblet of Midnight Mead"
drT2.textContent = "A dark honey mead aged under moonlight."

drinksDishTwo.appendChild(drH2)
drinksDishTwo.appendChild(drT2)

const drH3 = document.createElement("h3")
const drT3 = document.createElement("p")

drH3.textContent = "Potion of Bubbles"
drT3.textContent = "Sparkling berry fizz with a hint of enchanted lime."

drinksDishThree.appendChild(drH3)
drinksDishThree.appendChild(drT3)

// Step 7: Append the header and the dishes to the container
breadDiv.appendChild(breadHeader)
breadDiv.appendChild(breadDishOne)
breadDiv.appendChild(breadDishTwo)
breadDiv.appendChild(breadDishThree)

soupDiv.appendChild(soupHeader)
soupDiv.appendChild(soupDishOne)
soupDiv.appendChild(soupDishTwo)
soupDiv.appendChild(soupDishThree)

mainDiv.appendChild(mainHeader)
mainDiv.appendChild(mainDishOne)
mainDiv.appendChild(mainDishTwo)
mainDiv.appendChild(mainDishThree)

dessertDiv.appendChild(dessertHeader)
dessertDiv.appendChild(dessertDishOne)
dessertDiv.appendChild(dessertDishTwo)
dessertDiv.appendChild(dessertDishThree)

drinksDiv.appendChild(drinksHeader)
drinksDiv.appendChild(drinksDishOne)
drinksDiv.appendChild(drinksDishTwo)
drinksDiv.appendChild(drinksDishThree)

// Step 8: Create and export the function that adds the menu to the content div
function addMenuContent(element) {
    element.textContent = ""
    element.appendChild(menuHeader)
    element.appendChild(breadDiv)
    element.appendChild(soupDiv)
    element.appendChild(mainDiv)
    element.appendChild(dessertDiv)
    element.appendChild(drinksDiv)
}

export { addMenuContent }