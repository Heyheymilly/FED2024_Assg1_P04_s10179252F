document.addEventListener("DOMContentLoaded", function () {
    // Array of fun facts
    const facts = [
        "Frank Ocean’s real name is Christopher Edwin Breaux.",
        "Bananas are berries, but strawberries are not.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
        "Octopuses have three hearts and blue blood.",
        "Wombat poop is cube-shaped.",
        "Sharks existed before trees.",
        "There are more stars in the universe than grains of sand on all Earth's beaches."
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



        // Create the overlay
        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");
        overlay.innerHTML = `
          <img src="" alt="Expanded Image">
          <button class="close-button">Close</button>
        `;
        document.body.appendChild(overlay);
    
        // Handle image clicks
        const galleryItems = document.querySelectorAll(".live-gallery-item img");
        const overlayImage = overlay.querySelector("img");
        const closeButton = overlay.querySelector(".close-button");
    
        galleryItems.forEach(item => {
          item.addEventListener("click", function () {
            overlay.style.display = "flex"; // Show overlay
            overlayImage.src = this.src; // Set clicked image as overlay image
          });
        });
    
        // Close overlay
        closeButton.addEventListener("click", function () {
          overlay.style.display = "none";
        });
    
        // Close overlay when clicking outside the image
        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) {
            overlay.style.display = "none";
          }
        });
      });
;
