$(document).ready(function(){
    $("#botoncito").click(function(e){
        validar(e);
        e.preventDefault();
    });


    /*validador en vivo*/
    $("#nombre, #apellido, #telefono, #email, #ciudad, #provincia").keyup(function(e){
        validardos(e);
    });

let establecimientos = window.localStorage.getItem("establecimiento");
$("#establecimientoSpan").addClass("red");
$("#establecimientoSpan").text(establecimientos);

let zonas = window.localStorage.getItem("zonas");
$("#idiomaSpan").addClass("red");
$("#idiomaSpan").text(zonas);

let idiomas = window.localStorage.getItem("idioma");
$("#zonasSpan").addClass("red");
$("#zonasSpan").text(idiomas);

let horarios = window.localStorage.getItem("horarios");
$("#horariosModalidadSpan").addClass("red");
$("#horariosModalidadSpan").text(horarios);
    
});



function validar(e){
    e.preventDefault();
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
        
    }


    if($("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo email es obligatorio.</p>");
       
    }

    if($("#ciudad").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo ciudad es obligatorio.</p>");
       
    }

    

    let expresion = /[0-9]/;
    telefono = document.getElementById("telefono").value;

    if(!expresion.test(telefono) || $("#telefono").val().length>8){
        error=true;
        $("#mensaje").append("<p>Digite 8 numeros, sin codigo de pais, ejemplo: 44444444</p>");
    } 



    if($("#telefono").val().length<=7){
        error=true;
        $("#mensaje").append("<p>No digite menos de 8 numeros, ejemplo: 4444-4444</p>");
    }



    let expresion2 = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    email = document.getElementById("email").value;

    if(!expresion2.test(email) || $("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>Mail invalidado o el campo esta vacio.</p>");   
    }
    
    if($("#provincia").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo provincia es obligatorio</p>");
        
    }

    if(error == false){
        $("form").submit();
        alert("Enviado correctamente");
    }

    $("#botoncito").submit(function(){
        if($("#telefono").val().length==8 && !$("#apellido").val()==""
        && !$("#nombre").val()=="" && !$("#ciudad").val() == "" && !$("#email").val() == ""){
            alert("Enviado correctamente");
            createAutoClosingAlert(2000);
           

        }

        
        
    });


    
    
}

function validardos(e){
    e.preventDefault();
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
        
    }


    if($("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo email es obligatorio.</p>");
       
    }

    if($("#ciudad").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo ciudad es obligatorio.</p>");
       
    }

    

    let expresion = /[0-9]/;
    telefono = document.getElementById("telefono").value;

    if(!expresion.test(telefono) || $("#telefono").val().length>8){
        error=true;
        $("#mensaje").append("<p>Digite 8 numeros, sin codigo de pais, ejemplo: 44444444</p>");
    } 



    if($("#telefono").val().length<=7){
        error=true;
        $("#mensaje").append("<p>No digite menos de 8 numeros, ejemplo: 4444-4444</p>");
    }



    let expresion2 = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    email = document.getElementById("email").value;

    if(!expresion2.test(email) || $("#email").val() == ""){
        error=true;
        $("#mensaje").append("<p>Mail invalidado o el campo esta vacio.</p>");   
    }
    
    if($("#provincia").val() == ""){
        error=true;
        $("#mensaje").append("<p>El campo provincia es obligatorio</p>");
        
    }

    $("#botoncito").submit(function(){
        if($("#telefono").val().length==8 && !$("#apellido").val()==""
        && !$("#nombre").val()=="" && !$("#ciudad").val() == "" && !$("#email").val() == ""){
            alert("Enviado correctamente");
            createAutoClosingAlert(2000);
           

        }

        
        
    });


    
    
}