import "./styles.css"
import { addHomeContent } from "./homepage"
import { addMenuContent } from "./menu"
import { addContContent } from "./contact"

const contentDiv = document.querySelector(".content")

const buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(button => {
    button.addEventListener("click", tabSelection)
})

function tabSelection(event) {
    const currentTab = event.target.dataset.content
    if (currentTab === "menu") {
        addMenuContent(contentDiv)
    } else if (currentTab === "contact") {
        addContContent(contentDiv)
    } else {
        addHomeContent(contentDiv)
    }
}