/**
 * Created by manishgiri on 11/2/2016.
 */

var main = function() {
    $('form').submit(function() {
        var comment = $("#comment").val();
        if(comment !== "") {
            var html = $('<li>').text(comment);
            $(html).prependTo(".comments");
            comment = "";

        }

        return false;
    });
};

$(document).ready(main);
