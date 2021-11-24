$(document).ready(function(){
	$("#btn").click(function(){
		filtrar();
	});

	$("#btnEst").click(function(){
		filtrarNombre();
	});
});


let valor;

function filtrarNombre(){
	valor = $("#filtroEst").val();

	if(valor == 0){
		$(".est-todos").show();	
	}
	if(valor == 1){
		$(".est-todos").hide();
		$(".ramos-mejia").show();
	}
	if(valor == 2){
		$(".est-todos").hide();
		$(".lafe").show();
	}

	if(valor == 3){
		$(".est-todos").hide();
		$(".villa-luro").show();
	}

	if(valor == 4){
		$(".est-todos").hide();
		$(".mataderos").show();

	}
	
};

function filtrar(){
	valor = $("#filtro").val();

	if(valor == 0){
		$(".est-todos").show();
	}

	if(valor == 1){
		$(".est-todos").hide();
		$("#frances").show();
		
	}

	if(valor == 2){
		$(".est-todos").hide();
		$("#ingles").show()
	}

	if(valor == 3){
		$(".est-todos").hide();
		$("#portugues").show();
	}

	if(valor == 4){
		$(".est-todos").hide();
		$("#ruso").show();

	}

	if(valor == 5){
		$(".est-todos").hide();
		$("#chino").show()
	}

	if(valor == 6){
		$(".est-todos").hide();
		$("#coreano").show()
	}

	if(valor == 7){
		$(".est-todos").hide();
		$("#japones").show()
	}

	if(valor == 8){
		$(".est-todos").hide();
		$("#italiano").show()
	}
}
