$(document).ready(function(){

  var quoteList = ""
  $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(json){
    quoteList = json;

  });
  $("#get-quote").on("click", function(){
    var min = 1;
    var max = quoteList.length;
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumber);
    $("#quote").html("\" " + quoteList[randomNumber].quote + " \"");
    $("#author").html("- " + quoteList[randomNumber].author);
  });
});
