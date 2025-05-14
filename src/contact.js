// Step 1: Create the contact page header
const contactHeader = document.createElement("h1")
contactHeader.textContent = "Contact the Enchanted Fork"

// Step 2: Create visit us div, inside there's a title and four p's
const visitDiv = document.createElement("div")
const visitHeader = document.createElement("h3")
visitHeader.textContent = "Visit Us"

const visitp1 = document.createElement("p")
const visitp2 = document.createElement("p")
const visitp3 = document.createElement("p")
const visitp4 = document.createElement("p")

visitp1.textContent = "The Enchanted Fork"
visitp2.textContent = "At the edge of the Whispering Woods,"
visitp3.textContent = "Just beyond the Mossy Stone Bridge,"
visitp4.textContent = "(Or… 14 Elmroot Lane, Everhollow Village)"

visitDiv.appendChild(visitHeader)
visitDiv.appendChild(visitp1)
visitDiv.appendChild(visitp2)
visitDiv.appendChild(visitp3)
visitDiv.appendChild(visitp4)

// Step 3: Create email contact div, inside there's a title, two p's and an email link
const emailDiv = document.createElement("div")
const emailHeader = document.createElement("h3")
emailHeader.textContent = "Send Us a Scroll"

const emailp1 = document.createElement("p")
const emaill1 = document.createElement("a")
const emailp2 = document.createElement("p")

emailp1.textContent = "For questions, compliments, or potion inquiries:"
emaill1.setAttribute("href", "#")
emaill1.textContent = "hello@enchantedfork.com"
emailp2.textContent = "(Scrolls answered within one moon cycle—usually faster.)"

emailDiv.appendChild(emailHeader)
emailDiv.appendChild(emailp1)
emailDiv.appendChild(emaill1)
emailDiv.appendChild(emailp2)

// Step 4: Create phone div, inside there's a title, three p's and I need the phone styled in bold
const phoneDiv = document.createElement("div")
const phoneHeader = document.createElement("h3")
phoneHeader.textContent = "Book a Table"

const phonep1 = document.createElement("p")
const phonep2 = document.createElement("p")
const phonep3 = document.createElement("p")

phonep1.textContent = "Reservations for banquets, secret councils, or solo quests:"
phonep2.textContent = "Call us at (555) 123-FAEY"
phonep3.textContent = "Or whisper to a fairy at the front gate (if you're lucky enough to see one)."

phoneDiv.appendChild(phoneHeader)
phoneDiv.appendChild(phonep1)
phoneDiv.appendChild(phonep2)
phoneDiv.appendChild(phonep3)

// Step 5: Create opening hours div with three p's and a title
const openDiv = document.createElement("div")
const openHeader = document.createElement("h3")
openHeader.textContent = "Opening Hours"

const openp1 = document.createElement("p")
const openp2 = document.createElement("p")
const openp3 = document.createElement("p")

openp1.textContent = "Moonday to Freeday: 11:00am - 10:00pm"
openp2.textContent = "Starday & Sundown: 2:00pm - midnight"
openp3.textContent = "Closed on Dragon Days (you'll know when)"

openDiv.appendChild(openHeader)
openDiv.appendChild(openp1)
openDiv.appendChild(openp2)
openDiv.appendChild(openp3)

// Step 6: Create and export the function that adds the contact info to the content div
function addContContent(element) {
    element.textContent = ""
    element.appendChild(contactHeader)
    element.appendChild(visitDiv)
    element.appendChild(emailDiv)
    element.appendChild(phoneDiv)
    element.appendChild(openDiv)
}

export { addContContent }