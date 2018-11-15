var btCopiar = document.getElementsByClassName("btCopiar");
var btSelect = document.getElementById("btSelect");
var select01 = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("select")[0]; // Select Perícia acionada para o local que fica na primeira evolução
var areaTexto = document.getElementsByClassName("textoEvolucoes")[0].getElementsByTagName("textarea")[0];



window.onload = inicializar_campos;


btCopiar[0].addEventListener("click",function(){
	var mensagem="";	
	var span = select01.previousElementSibling;
	var campoServidor = select01.nextElementSibling;
	var campoMasp = campoServidor.nextElementSibling;
	

	if (select01.value == "."){
		mensagem = span.textContent + select01.value;
	}
	else {
		mensagem = span.textContent + select01.value + " "+campoServidor.value+" (m. "+campoMasp.value+").";
	}

	areaTexto.value = mensagem;
	areaTexto.select();
});

select01.addEventListener("change",function(){
	var campoServidor = select01.nextElementSibling;
	var campoMasp = campoServidor.nextElementSibling;	
	if (select01.value == "."){
		campoServidor.hidden = true;
		campoMasp.hidden = true;
	}
	else {
		campoServidor.hidden = false;
		campoMasp.hidden = false;
	}
});

btSelect.addEventListener("click",function(){
	areaTexto.select();
});

function inicializar_campos(){
	var campoServidor = select01.nextElementSibling;
	var campoMasp = campoServidor.nextElementSibling;		
	
	if (select01.value == "."){
		campoServidor.hidden = true;
		campoMasp.hidden = true;	
	}
	else {

		campoServidor.hidden = false;
		campoMasp.hidden = false;
	}

}


