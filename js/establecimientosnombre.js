$(document).ready(function(){
	$("#btn").click(function(){
		filtrar();
	});
});


let valor;

function filtrar(){
	valor = $("#filtro").val();

	if(valor == 0){
		$(".establecimientos").show();	
	}
	if(valor == 1){
		$(".establecimientos").hide();
		$(".ramos-mejia").show();
	}
	if(valor == 2){
		$(".establecimientos").hide();
		$(".lafe").show();
	}

	if(valor == 3){
		$(".establecimientos").hide();
		$(".villa-luro").show();
	}

	if(valor == 4){
		$(".establecimientos").hide();
		$(".mataderos").show();

	}
	
};