// Function to get a new random quote
function getQuote() {
  $.ajax({
    url: "https://api.quotable.io/random", // Call the random quote API
    success: function (data) {
      // If the API call is successful, execute the following code
      $("#quote").html(data.content); // Set the text of the quote element to the quote content
      $("#author").html("- " + data.author); // Set the text of the author element to the author name

      // Generate a random background color
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Set the background color of the quote container
      $("#quote-container").css("background-color", randomColor);
    }
  });
}

$(document).ready(function () {
  // Execute the following code when the document is ready
  getQuote(); // Call the getQuote() function to display a random quote

  // Add an event listener to the "Show Another Quote" button
  $("#get-another-quote-button").on("click", function () {
    getQuote(); // Call the getQuote() function to display a new random quote
  });
});
