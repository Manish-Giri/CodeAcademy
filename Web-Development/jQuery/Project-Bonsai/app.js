var main = function() {
  $("#top-text").keyup(function() {
    var $topText = $("#top-text").val();
    $(".top-caption").text($topText);
  });
  
  $("#bottom-text").keyup(function() {
    var $bottomText = $("#bottom-text").val();
    $(".bottom-caption").text($bottomText);
  });
  
  $("#image-url").keyup(function() {
    var $imageURL = $("#image-url").val();
    $(".meme img").attr("src", $imageURL);
  });
};
 
$(document).ready(main);
