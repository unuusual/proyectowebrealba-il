$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });


    /*validador en vivo*/
    $("#nombre, #apellido, #telefono, #email, #ciudad, #provincia").keyup(function(e){
        validar(e);
    });

    
});
function validar(e){
    let error=false;
    $("#mensaje").empty();
    $("#contador").empty();
    $("#contador2").empty();
    $("#form input").removeClass();
    $("#form input").addClass("cajitaTexto");
    if($("#nombre").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo nombre es obligatorio.</p>");
        $("#nombre").addClass("error");
    }
    if($("#apellido").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo apellido es obligatorio.</p>");
        $("#apellido").addClass("error");
    }

    if($("#telefono").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo telefono es obligatorio.</p>");
        $("#telefono").addClass("error");
    }

    if($("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo email es obligatorio.</p>");
        $("#email").addClass("error");
    }

    if($("#ciudad").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo ciudad es obligatorio.</p>");
        $("#ciudad").addClass("error");
    }

    if($("#provincia").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo provincia es obligatorio.</p>");
        $("#provincia").addClass("error");
    }

    let expresion = /^[0-9]+$/;
    telefono = document.getElementById("telefono").value;

    if(!expresion.test(telefono) || $("#telefono").val().length>8){
        error=true;
        $("#mensaje").append("<p>Digite 8 numeros, sin codigo de pais.</p>");
        $("#telefono").addClass("error");
    }



    if($("#telefono").val().length<=7){
        error=true;
        $("#mensaje").append("<p>No digite menos de 8 numeros.</p>");
        $("#telefono").addClass("error");
    }

    let expresion2 = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    email = document.getElementById("email").value;

    if(!expresion2.test(email) || $("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>Mail invalidado o el campo esta vacio.</p>");
        $("#telefono").addClass("error");
    }
    
    if($("#localidad").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo localidad es obligatorio</p>");
        $("#localidad").addClass("error");
    }


    let bien = "Formulario enviado correctamente";
    let mal = "Formulario NO enviado correctamente, revise los campos";

    if (error){
        e.preventDefault();
    }

    $("#botoncito").click(function(){
        if($("#telefono").val().length==8){
            alert(bien);
            createAutoClosingAlert(2000);
        }

    });
}