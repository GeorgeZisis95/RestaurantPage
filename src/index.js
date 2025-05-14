import "./styles.css"
import { textDiv } from "./homepage"
import { menuHeader, breadDiv, soupDiv, mainDiv, dessertDiv, drinksDiv } from "./menu"

const contentDiv = document.querySelector(".content")
contentDiv.appendChild(menuHeader)
contentDiv.appendChild(breadDiv)
contentDiv.appendChild(soupDiv)
contentDiv.appendChild(mainDiv)
contentDiv.appendChild(dessertDiv)
contentDiv.appendChild(drinksDiv)