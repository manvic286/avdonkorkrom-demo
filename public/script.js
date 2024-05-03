const date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()

// Function to fetch a quote and update the display
// function updateQuote() {
//     const quoteURL = "https://api.quotable.io/random"; // Replace with your preferred Quote API URL
  
//     fetch(quoteURL)
//       .then(response => response.json())
//       .then(data => {
//         const quoteElement = document.getElementById("quote");
//         quoteElement.textContent = `"${data.content}" - ${data.author}`;
//       })
//       .catch(error => console.error(error));
//   }
  
//   // Call the updateQuote function initially
//   updateQuote();
  
//   // Set an interval to call updateQuote every 10 minutes (600 seconds)
//   setInterval(updateQuote, 600000);

// const url = 'https://kjv-bible.p.rapidapi.com/randomVerse';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual key
//     'X-RapidAPI-Host': 'kjv-bible.p.rapidapi.com'
//   }
// };

// async function fetchAndDisplayVerse() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();

//     // Get a reference to the element where you want to display the verse
//     const verseDisplay = document.getElementById("memoryVerse");

//     // Update the element's content with the fetched verse
//     verseDisplay.textContent = result;
//   } catch (error) {
//     console.error("Error fetching verse:", error);

//     // Optionally display an error message in the browser
//     verseDisplay.textContent = "Error loading verse.";
//   }
// }

// // Call the function to fetch and display the verse
// fetchAndDisplayVerse();

// // Set an interval to call updateQuote every 10 minutes (600 seconds)
// setInterval(fetchAndDisplayVerse, 600000)

// const url = 'https://bible-verse-of-the-day.p.rapidapi.com/verse';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual key
//     'X-RapidAPI-Host': 'bible-verse-of-the-day.p.rapidapi.com'
//   }
// };

// async function VerseOfTheDay() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();  // Parse as JSON since the response is likely a JSON object

//     // Access specific properties of the verse data (adjust as needed)
//     const verseText = result;
//     // const reference = result.reference;

//     // Get a reference to the element where you want to display the verse
//     const verseDisplay = document.getElementById("memoryVerse");

//     // Update the element's content with the verse
//     verseDisplay.innerHTML = `${verseText}`;
//   } catch (error) {
//     console.error("Error fetching verse:", error);

//     // Optionally display an error message in the browser
//     verseDisplay.textContent = "Error loading verse of the day.";
//   }
// }

// // Call the function to fetch and display the verse
// VerseOfTheDay();

// Array of quotes (replace with your own quotes)
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "If you can dream it, you can do it. - Walt Disney",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ];
  
  // Function to pick a random quote
  function getRandomQuote() {
    // Get a random index within the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Return the quote at the random index
    return quotes[randomIndex];
  }
  
  // Get a random quote
  const randomQuote = getRandomQuote();
  
  // Do something with the random quote (e.g., display it)
  console.log(randomQuote);
  