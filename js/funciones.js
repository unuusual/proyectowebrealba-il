$(document).ready(function(){
    $("a.desplegable").click(function(){
      if($('#menu').is(":visible")){
        $('#menu').slideUp();
      } else if($('#menu').is(":hidden")){
        $('#menu').slideDown();
      }
    });
  
    $(window).resize(function(){
      if($(this).width()>768){
        $("#menu").show();
      } else{
        $("#menu").hide();
      }
    });


    



  $("#establecimiento").change(function(){
        llenarCombo($(this).val());
    });
});

function llenarCombo(){
  let establecimientos = $("#establecimiento").val();
  let zonas = $("#zonas").val();
  let ingles = $("#ingles");
  let coreano = $("#coreano");
  let italiano = $("#italiano");
  let japones = $("#japones");
  let portugues = $("#portugues");
  let chino = $("#chino");
  let ruso = $("#ruso");
  let frances = $("#frances");

  let ramos = $("#ramos-mejia");
  let mataderos = $("#mataderos");
  let lafe = $("#lafe");
  let villa = $("#villa-luro");

  let persona = [{
    nombre : hector,
    age : 34
  }];

  localStorage.setItem("persona", JSON.stringify(persona));



  if(establecimientos == 0){
    lafe.hide();
    mataderos.hide();
    ramos.hide();
    villa.hide();
    ingles.hide();
    coreano.hide();
    italiano.hide();
    japones.hide();
    portugues.hide();
    chino.hide();
    ruso.hide();
    frances.hide();
    }

    if(establecimientos == 1){
      lafe.hide();
      mataderos.hide();
      ramos.hide();
      villa.show();
      ingles.hide();
      coreano.hide();
      italiano.hide();
      japones.show();
      portugues.show();
      chino.hide();
      ruso.hide();
      frances.hide();

     
      $("#nombre").empty();
      $("#direccion").empty();
      $("#localidad").empty();
      $("#provincia").empty();
      $("#email").empty();

      $("#nombre").append("<p>Nombre del establecimiento: "+"CAMBRIDGE SCHOOL"+"</p>");
      $("#direccion").append("<p>Direccion: "+ "Av Santa Rosa 1243"+"</p>");
      $("#localidad").append("<p>Localidad: "+ "Villa luro"+"</p>");
      $("#provincia").append("<p>Provincia: "+ "Buenos aires"+"</p>");
      $("#email").append("<p>Email: "+ "academiaIdiomas@oficinacentral.com"+"</p>");
      }

    

      if(establecimientos == 2){
        lafe.hide();
        mataderos.show();
        ramos.hide();
        villa.hide();
        ingles.hide();
        coreano.show();
        italiano.hide();
        japones.hide();
        portugues.hide();
        chino.show();
        ruso.hide();
        frances.hide();

        $("#nombre").empty();
      $("#direccion").empty();
      $("#localidad").empty();
      $("#provincia").empty();
      $("#email").empty();

      $("#nombre").append("<p>Nombre del establecimiento: "+"CAMBRIDGE SCHOOL"+"</p>");
      $("#direccion").append("<p>Direccion: "+ "Av Alberdi 9801"+"</p>");
      $("#localidad").append("<p>Localidad: "+ "Mataderos"+"</p>");
      $("#provincia").append("<p>Provincia: "+ "Buenos aires"+"</p>");
      $("#email").append("<p>Email: "+ "academiaIdiomas@oficinacentral.com"+"</p>");

        }

        if(establecimientos == 3){
          lafe.show();
          mataderos.hide();
          ramos.hide();
          villa.hide();
          ingles.show();
          coreano.hide();
          italiano.hide();
          japones.hide();
          portugues.hide();
          chino.hide();
          ruso.show();
          frances.hide();
          
          $("#nombre").empty();
          $("#direccion").empty();
          $("#localidad").empty();
          $("#provincia").empty();
          $("#email").empty();
    
          $("#nombre").append("<p>Nombre del establecimiento: "+"CAMBRIDGE SCHOOL"+"</p>");
          $("#direccion").append("<p>Direccion: "+ "Av Puñales 6458"+"</p>");
          $("#localidad").append("<p>Localidad: "+ "Laferrere"+"</p>");
          $("#provincia").append("<p>Provincia: "+ "Buenos aires"+"</p>");
          $("#email").append("<p>Email: "+ "academiaIdiomas@oficinacentral.com"+"</p>");
          
          }

          if(establecimientos == 4){
            lafe.hide();
            mataderos.hide();
            ramos.show();
            villa.hide();
            ingles.show();
            coreano.hide();
            italiano.show();
            japones.hide();
            portugues.hide();
            chino.hide();
            ruso.hide();
            frances.hide();

            $("#nombre").empty();
          $("#direccion").empty();
          $("#localidad").empty();
          $("#provincia").empty();
          $("#email").empty();
    
          $("#nombre").append("<p>Nombre del establecimiento: "+"CAMBRIDGE SCHOOL"+"</p>");
          $("#direccion").append("<p>Direccion: "+ "Argentina 3232"+"</p>");
          $("#localidad").append("<p>Localidad: "+ "Ramos mejia"+"</p>");
          $("#provincia").append("<p>Provincia: "+ "Buenos aires"+"</p>");
          $("#email").append("<p>Email: "+ "academiaIdiomas@oficinacentral.com"+"</p>");
            }
    }

  