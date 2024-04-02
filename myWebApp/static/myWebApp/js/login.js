$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();

        var email = $("#txt_email").val();
        var password = $("#txt_password").val();

        if (email == "" || password == "")
        {
            alert("Debe ingresar email y contraseña");
            return false;
        }
        // Redirect a main
        $(location).prop('href', '/main');

    });


});