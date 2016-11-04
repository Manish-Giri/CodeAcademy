/**
 * Created by manishgiri on 11/3/2016.
 */

var main = function() {
    //In script.js, add a click event handler to the .day divs.
    $(".day").click(function() {
        //When a .day div is clicked, toggle the following .hourly div, which is its next sibling.
        $(this).next().toggle();
        $(this).find("span").toggleClass("glyphicon glyphicon-minus");
    });
};

$(document).ready(main);
