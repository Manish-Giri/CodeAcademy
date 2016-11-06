/**
 * Created by manishgiri on 11/6/16.
 */
var main = function() {
    $('.nav li').click(function() {
        var category = $(this).attr('class');
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        if(category == 'nav-consumer') {
            $(".thumbnail").removeClass("selected");
            $(".consumer").addClass("selected");
        }
        else if(category == 'nav-mobile') {
            $(".thumbnail").removeClass("selected");
            $(".mobile").addClass("selected");
        }

        else if(category == 'nav-commerce') {
            $(".thumbnail").removeClass("selected");
            $(".commerce").addClass("selected");
        }
        else if(category == 'nav-enterprise') {
            $(".thumbnail").removeClass("selected");
            $(".enterprise").addClass("selected");
        }
        else if(category == 'nav-all') {
            $(".thumbnail").removeClass("selected");
            //$(".mobile").addClass(category);
        }
        //$('.nav li').removeClass('active');
        //$(this).addClass('active');




    });
};

$(document).ready(main);
