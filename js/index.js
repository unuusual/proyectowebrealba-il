
window.addEventListener('load',() =>{
    var rellenarForm = document.querySelector(".rellForm");
    var select = document.querySelector("#establecimiento")
    var tiempo = setInterval(function(){
        cambiaColores()
    }, 2000)
    frenarColores()
    


    //Funciones
    function cambiaColores(){
        if(rellenarForm.style.background == "transparent"){
            rellenarForm.style.background = "#e9d8a6"
            rellenarForm.style.color = "black"
        }
        else{
            rellenarForm.style.transition = "4s"
            rellenarForm.style.color = "white"
            rellenarForm.style.background = "transparent"
        }
    }

    function frenarColores(){
        rellenarForm.addEventListener('click', function(){
            rellenarForm.style.transition = "none"
            rellenarForm.style.background = "transparent"
            rellenarForm.style.boxShadow = "0px 0px 10px orange"
            rellenarForm.style.color = "red"
            rellenarForm.style.fontWeight = "bold"
            clearInterval(tiempo)
        })
    }

})





$(document).ready(function(){
})