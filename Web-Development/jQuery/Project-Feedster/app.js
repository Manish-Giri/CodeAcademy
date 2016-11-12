/**
 * Created by manishgiri on 11/12/2016.
 */
var main = function() {
    $(".notification img").click(function() {
        $(".notification-menu").toggle();
    });

    $(".post button").click(function() {
        $(this).toggleClass("btn-like");
    });
};

$(document).ready(main);
