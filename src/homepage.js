// Step 1: Create the header of the page
const homeHeader = document.createElement("h1")
homeHeader.textContent = "The Enchanted Fork"

// Step 2: Create the about paragraphs and append them to the about div
const aboutDiv = document.createElement("div")

const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const p4 = document.createElement("p")
const p5 = document.createElement("p")

p1.textContent = "Welcome, traveler, to The Enchanted Fork — a place where stories are savored and every dish holds a sprinkle of magic."
p2.textContent = "Nestled deep within the Whispering Woods (or just off the main road past the village square), our tavern was founded by a curious cook and a wandering witch who believed that food should warm the soul as well as the belly. With recipes passed down through spellbooks and forest whispers, we've crafted a menu that brings fantasy to your fork."
p3.textContent = "Here, goblins dine beside knights, elves sip herbal brews with pixies, and even the occasional dragon might stop by for a flame-grilled treat (no need to panic, they're quite polite). Whether you seek a hearty meal after a long quest or a sweet spell to end your day, you'll find comfort, charm, and a little enchantment in every bite."
p4.textContent = "We believe in slow-simmered stews, moonlit ingredients, and laughter echoing off timbered walls. But more than that, we believe in bringing people together—be they brave adventurers or quiet dreamers."
p5.textContent = "So pull up a chair, choose your potion, and let the story begin. Your table awaits..."

aboutDiv.appendChild(p1)
aboutDiv.appendChild(p2)
aboutDiv.appendChild(p3)
aboutDiv.appendChild(p4)
aboutDiv.appendChild(p5)

// Step 3: Create and export the function that adds the homepage to the content div
function addHomeContent(element) {
    element.textContent = ""
    element.appendChild(homeHeader)
    element.appendChild(aboutDiv)
}

export { addHomeContent }