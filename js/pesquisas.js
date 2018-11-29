var pcmg;
var tabela = document.getElementById("tabela");
var entrada = document.getElementById("myInput");

function myFunction(){
	var input, filter, table, tr, td, i, cond, c;
	input = document.getElementById("myInput");
	table = document.getElementById("tabela");
	
	tr = table.getElementsByTagName("tr");
	filter = input.value.toUpperCase();
	
	for(i  = 1; i < tr.length; i++){
		cond=[false,false,false,false,false]
		td = tr[i].getElementsByTagName("td");
		for (var cols=0; cols < td.length; cols++) {
			if(td[cols].innerHTML.toUpperCase().indexOf(filter) > -1){

				cond[cols]=true;
			}
		}
		c = false;
		for (var cols = 0; cols < td.length; cols++){
			c = c || cond[cols];
		}
		if(c){tr[i].style.display = "";}
		else{tr[i].style.display="none";}
	}
	console.log("digitou");
}

entrada.addEventListener("keyup",myFunction);
window.onload = function() {
	var local = localStorage.getItem("pcmg");
	pcmg = JSON.parse(local);
	var numServ = pcmg.servidores.length;
	var node, linha, textNode;

	if (local != null) {
		console.log("Há itens na lista");
	}
	else {
		console.log("lista vazia");
	}	
	
	for(var i=0;i< numServ;i++){

	  linha = document.createElement("tr");
	  node = document.createElement("td");
	  textNode = document.createTextNode(pcmg.servidores[i].nome);
	  node.appendChild(textNode);
	  linha.appendChild(node);

	  node = document.createElement("td");
	  textNode = document.createTextNode(pcmg.servidores[i].cargo);
	  node.appendChild(textNode);
	  linha.appendChild(node);

	  node = document.createElement("td");
	  textNode = document.createTextNode(pcmg.servidores[i].delegacia);	  
	  node.appendChild(textNode);
	  linha.appendChild(node);

	  node = document.createElement("td"); 
	  textNode = document.createTextNode(pcmg.servidores[i].masp);
	  node.appendChild(textNode);
	  linha.appendChild(node);

	  node = document.createElement("td");
	  textNode = document.createTextNode(pcmg.servidores[i].telefone);
	  node.appendChild(textNode);
	  linha.appendChild(node);
	  tabela.appendChild(linha);
	}
	
};

/*

pcmg = {servidores:[
		{nome:"Honório",masp:"258851",cargo:"Investigador",delegacia:"DHPP/BH",telefone:"99398-6262"}]};
*/