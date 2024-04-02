$(document).ready(function(){

    $('.container').load('./static/myWebApp/html/home.html');

    // Función que cargará páginas dinamicamente en el div container en vez de redireccionar
    $("#menu a, #menu .logo").click(function(e){
        e.preventDefault();
        if (this.className.includes("dropdown")) {
            return false;
        }
        
        var href_seleccionado = e.target.href

        // Si la URL contiene "main", hacemos un redirect a /main
        if (isImgLogoClicked($(this)) || href_seleccionado.includes("main") || href_seleccionado.includes("#")){
            $(location).attr("href", "./main") // REDIRECT a la página main
            return false;
        } else if (href_seleccionado.includes("login")) {
            $(location).attr("href", "./login") // REDIRECT a la página /login
            return false;
        } else {
            // Aquí cargamos dinamicamente el valor del atributo href del link
            $('div.container').load(href_seleccionado);
        }
        $('.active').not(this).removeClass('active');
        $(this).addClass('active');
        $(".show").removeClass("show");

        return false;
    });

    // Función para ocultar cualquier link dentro de los "dropdown-menu" (Categorías Juegos o Nombre Usuario)
    $('.dropdown-menu a').click(function(e){
        e.preventDefault();
        $(".show").removeClass("show");        
    });


    // Función para ocultar elementos con clase "dropdown" ajenos al dropdown que clickeamos
    $('.dropdown > a').click(function(e){
        e.preventDefault();
        // selectores para encontrar elementos por jerarquía (padres, hermanos o siblings, hijos)
        var element = $(this).parent().siblings().children('.show');
        $(element).removeClass("show");
    });


    function isImgLogoClicked(e){
        return $(e)[0].tagName == 'IMG' && $(e).attr('src').includes('logo.png');
    }

});
