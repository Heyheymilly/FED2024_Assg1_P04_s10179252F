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
  document.getElementById("fact-button").addEventListener("click", displayRandomFact);