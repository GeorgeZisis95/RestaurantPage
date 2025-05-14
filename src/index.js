import "./styles.css"
import { homeHeader, aboutDiv } from "./homepage"
import { menuHeader, breadDiv, soupDiv, mainDiv, dessertDiv, drinksDiv } from "./menu"
import { contactHeader, visitDiv, emailDiv, phoneDiv, openDiv } from "./contact"

const contentDiv = document.querySelector(".content")
// Homepage
// contentDiv.appendChild(homeHeader)
// contentDiv.appendChild(aboutDiv)

// Menu Page
// contentDiv.appendChild(menuHeader)
// contentDiv.appendChild(breadDiv)
// contentDiv.appendChild(soupDiv)
// contentDiv.appendChild(mainDiv)
// contentDiv.appendChild(dessertDiv)
// contentDiv.appendChild(drinksDiv)

// Contact Page
contentDiv.appendChild(contactHeader)
contentDiv.appendChild(visitDiv)
contentDiv.appendChild(emailDiv)
contentDiv.appendChild(phoneDiv)
contentDiv.appendChild(openDiv)