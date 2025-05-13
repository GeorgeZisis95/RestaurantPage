const contentDiv = document.querySelector(".content")

const textDiv = document.createElement("p")
textDiv.textContent = "Welcome to The Enchanted Fork, a cozy haven nestled beneath the whispering willows of Everglade \
Hollow. Here, under twinkling lanterns and ivy-draped archways, we serve dishes brewed with stardust, forest herbs, \
and a pinch of old magic. Our chefs—once apprentices to woodland witches and castle cooks—prepare feasts fit for elves, \
travelers, and noble beasts alike. Whether you arrive on foot, broomstick, or griffin-back, \
a warm hearth and a spellbinding meal await. Come with wonder, leave with joy."
contentDiv.appendChild(textDiv)

export { contentDiv }