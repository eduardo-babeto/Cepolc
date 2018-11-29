var servidores;
var btCadastrar = document.getElementById("btnOk");
var pcmg;



btCadastrar.addEventListener('click',function(){
	
	var nome        = document.querySelector("input:nth-child(1)").value;
	var cargo        = document.querySelector("input:nth-child(2)").value;
	var delegacia  = document.querySelector("input:nth-child(3)").value;
	var masp        = document.querySelector("input:nth-child(4)").value;
	var telefone    =  document.querySelector("input:nth-child(5)").value;
	var registros;
	var obj = {nome:nome,masp:masp,cargo:cargo,delegacia:delegacia,telefone:telefone};
	pcmg.servidores.push(obj);
	registros = pcmg.servidores.length;
	console.log("Número de registros: "+ registros);
	console.log("Ultimo servidor: "+pcmg.servidores[registros-1].nome);
	localStorage.setItem("pcmg",JSON.stringify(pcmg));
	//alert(JSON.stringify(pcmg));
	//pcmg.servidores.pop();
	//localStorage.setItem("pcmg",JSON.stringify(pcmg));
	alert("Servidor cadastrado!");
	//console.log("clicou!");
	//localStorage.removeItem("pcmg");
	
});

window.onload = function(){
	
	var local = localStorage.getItem("pcmg");
	var lista;
	if (local == null) {
	    console.log("Lista vazia, criar outra");
	    pcmg = {servidores:[
		{nome:"Pessoas",masp:"masp",cargo:"Cargo",delegacia:"Delegacia",telefone:"xxxxx-xxxx"}]};
	   lista = JSON.stringify(pcmg);    
	   localStorage.setItem("pcmg",lista);
	}
	else{
		console.log("Existem itens na lista");	
		pcmg = JSON.parse(local);		
	}
};









