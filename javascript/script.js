// Array of fun facts
const facts = [
    "Frank Oceans real name is Christopher Edwin Breaux.",
    "Frank Ocean was born on October 28, 1987, in Long Beach, California.",
    "Frank Oceans debut album 'Channel Orange' won a Grammy for Best Urban Contemporary Album in 2013.",
    "Frank Ocean is known for his storytelling and poetic lyrics in his music.",
    "Frank Ocean named his stage name after Frank Sinatra and the movie 'Ocean's 11.'",
    "Frank Ocean started his music career as a ghostwriter for artists like Justin Bieber, Beyoncé, and John Legend.",
    "Frank Oceans album 'Blonde' is considered one of the best albums of the 2010s.",
    "Frank Ocean is openly bisexual and has been a vocal advocate for LGBTQ+ rights in the music industry.",
    "Frank Oceans music often explores themes of love, heartbreak, and identity.",
    "Frank Ocean has a passion for cars and has written songs referencing luxury vehicles like 'Ferrari' and 'McLaren.'"
];



// Function to display a random fact
function displayRandomFact() {
    const factElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}


// Add event listener to the button
const factButton = document.getElementById("fact-button");
if (factButton) {
    factButton.addEventListener("click", displayRandomFact);
} else {
    console.error("Element with id 'fact-button' not found!");
}






// Live event selector logic
const eventSelector = document.getElementById("live-event-selector");
if (eventSelector) {
    eventSelector.addEventListener("change", function () {
        const selectedCity = this.value; // Get the selected value (e.g., 'ny', 'la', 'ldn')
        const galleryItems = document.querySelectorAll(".live-gallery-item"); // Select all gallery items


        // Hide all gallery items
        galleryItems.forEach(item => item.style.display = "none");


        if (selectedCity) {
            // Show items that match the selected city
            const selectedItems = document.querySelectorAll(`.live-${selectedCity}`);
            selectedItems.forEach(item => item.style.display = "block");
        }
    });
} else {
    console.error("Element with id 'live-event-selector' not found!");
}
document.addEventListener("DOMContentLoaded", function () {
// Create overlay for displaying images
const overlay = document.createElement("div");
overlay.classList.add("image-overlay");
overlay.innerHTML = `
    <img src="" alt="Expanded Image">
    <button class="close-button">Close</button>
`;
document.body.appendChild(overlay);


const galleryItems = document.querySelectorAll(".live-gallery-item");
const overlayImage = overlay.querySelector("img");
const closeButton = overlay.querySelector(".close-button");
const dropdown = document.getElementById("live-event-selector");
const galleryContainer = document.getElementById("live-gallery-container");


// Show all items initially by removing "hidden" class from gallery container
galleryContainer.classList.remove("hidden");


// Display only New York images by default
galleryItems.forEach(item => {
    if (item.classList.contains("live-ny")) {
        item.style.display = "block"; // Show NY images
    } else {
        item.style.display = "none"; // Hide non-NY images
    }
});})

const mailingListForm = document.getElementById('mailing-list-form');

// Add submit event listener
mailingListForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form values (optional, if you need to process them)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Display success alert
  alert('Thank you for subscribing, ' + name + '!');})
