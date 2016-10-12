$(document).ready(function(){
  console.log("The Document is Ready");
  var quoteList = ""
  $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(json){
    quoteList = json;
  });
  $("#get-quote").on("click", function(){
    $("#quote").html(quoteList[0].quote);
    console.log(quoteList);
  });
});
