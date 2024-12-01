document.addEventListener("DOMContentLoaded", function () {
    // --- Mailing List Form ---
    const mailingListForm = document.getElementById('mailing-list-form');
    mailingListForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Display success alert
        alert('Thank you for subscribing, ' + name + '!');
    });

    // --- Fun Facts Section ---
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

    const factButton = document.getElementById("fact-button");
    if (factButton) {
        factButton.addEventListener("click", displayRandomFact);
    } else {
        console.error("Element with id 'fact-button' not found!");
    }

    function displayRandomFact() {
        const factElement = document.getElementById("fun-fact");
        const randomIndex = Math.floor(Math.random() * facts.length);
        factElement.textContent = facts[randomIndex];
    }

    // --- Live Event Selector ---
    const eventSelector = document.getElementById("live-event-selector");
    if (eventSelector) {
        eventSelector.addEventListener("change", function () {
            const selectedCity = this.value; // Get selected city (e.g., 'ny', 'la', 'ldn')
            const galleryItems = document.querySelectorAll(".live-gallery-item"); // All gallery items

            // Hide all items
            galleryItems.forEach(item => item.style.display = "none");

            // Show only items matching the selected city
            if (selectedCity) {
                const selectedItems = document.querySelectorAll(`.live-${selectedCity}`);
                selectedItems.forEach(item => item.style.display = "block");
            }
        });
    } else {
        console.error("Element with id 'live-event-selector' not found!");
    }

    // --- Gallery Overlay ---
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

    // Show all items initially by removing "hidden" class
    galleryContainer.classList.remove("hidden");

    // Display New York images by default
    galleryItems.forEach(item => {
        if (item.classList.contains("live-ny")) {
            item.style.display = "block"; // Show NY images
        } else {
            item.style.display = "none"; // Hide others
        }
    });

    // Add click event for overlay
    galleryItems.forEach(item => {
        const img = item.querySelector("img");
        img.addEventListener("click", function () {
            overlay.style.display = "flex"; // Show overlay
            overlayImage.src = img.src; // Set clicked image as overlay
        });
    });

    // Close button logic
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    // Close overlay when clicking outside the image
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // Dropdown filtering logic
    dropdown.addEventListener("change", function () {
        const selectedCity = this.value;

        galleryItems.forEach(item => {
            // Hide all items
            item.style.display = "none";

            // Show only items matching the selected city
            if (item.classList.contains(`live-${selectedCity}`)) {
                item.style.display = "block";
            }
        });
    });
});
