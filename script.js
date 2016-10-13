$(document).ready(function(){

  var quoteList = ""
  $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(json){
    quoteList = json;

  });
  $("#get-quote").on("click", function() {
    var min = 1;
    var max = quoteList.length;
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    var quote = quoteList[randomNumber];
    $("#quote").html("\"" + quote.quote + "\"");
    $("#author").html("- " + quote.author);
    $("#twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + quote.quote);
  });

});
