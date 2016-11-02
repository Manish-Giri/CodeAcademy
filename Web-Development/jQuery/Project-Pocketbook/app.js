/**
 * Created by manishgiri on 11/1/16.
 */
var main = function() {
    $('form').submit(function() {
        var firstName = $('#first').val();

        if(firstName === "") {
            $(".first-name-error").text("Please enter your first name.");
        }

        var lastName = $('#last').val();

        if(lastName === "") {
            $(".last-name-error").text("Please enter your last name.");
        }


        var email = $('#email').val();

        if(email === "") {
            $(".email-error").text("Please enter your email address.");
        }

        var password = $('#password').val();

        if(password === "") {
            $(".password-error").text("Please enter a password.");
        }

        if(password.length < 8) {
            $(".password-error").text("Short passwords are easy to guess. Try one with at least 8 characters.");
        }

        if(email === "xyz") {
            $(".email-error").text("This email is already taken.");
        }

        return false;
    });
};

$(document).ready(main);
