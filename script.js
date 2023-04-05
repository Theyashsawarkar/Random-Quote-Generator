function getQuote() {
  $.ajax({
    url: "https://api.quotable.io/random",
    success: function (data) {
      $("#quote").html(data.content);
      $("#author").html("- " + data.author);

      // Generate a random background color
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Set the background color of the quote container
      $("#quote-container").css("background-color", randomColor);
    }
  });
}

$(document).ready(function () {
  getQuote();

  $("#get-another-quote-button").on("click", function () {
    getQuote();
  });
});
