$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });


    /*validador en vivo*/
    $("#nombre, #apellido, #telefono, #email, #localidad, #textArea").keyup(function(e){
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

    let expresion = /^[0-9]+$/;
    telefono = document.getElementById("telefono").value;

    if(!expresion.test(telefono) || $("#telefono").val().length>10){
        error=true;
        $("#mensaje").append("<p>Digite hasta 10 numeros, sin codigo de pais.</p>");
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

    if($("#textArea").val().length>1000){
        error = true;
        $("#textArea").removeClass();
        $("#contador2").append("<p>El campo localidad no puede superar los 1000 caracteres</p>");
        $("#textArea").addClass("error");
    }


    if($("#textArea").val().length<1001){
        $("#textArea").removeClass();
        $("#contador").append("<p>Contador de palabras "+$("#textArea").val().length+"</p>");
    }
    if($("#textArea").val().length>1000){
        error=true;
        $("#contador").append("<p>Contador de palabras "+$("#textArea").val().length+"</p>");
        $("#textArea").addClass("error");
    }

    let bien = "Formulario enviado correctamente";
    let mal = "Formulario NO enviado correctamente, revise los campos";

    if (error){
        e.preventDefault();
    }

    $("#boton").click(function(){
        if(error == false){
            alert(bien);
            createAutoClosingAlert(2000);
        }
    });
}