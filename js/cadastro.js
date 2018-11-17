var bok = document.querySelector("div.dados button");
var pcmg; 
	
bok.addEventListener("click",function(){
	var obj = JSON.parse(localStorage.getItem("pcmg"));
	alert(obj.servidores[1].nome);
	console.log("Carregou item no localStorage");
});

window.onload = function(){
	pcmg = 	{servidores:[
	 		{"nome":"Eduardo","carreira":"Investigador","masp":"1112223","dp":"Cepolc","telefone":"55555-1234"},
			{"nome":"Honório","carreira":"Investigador","masp":"33311122","dp":"DHPP/BH","telefone":"7777-6262"}

	]};
	var strStorage = JSON.stringify(pcmg);
	localStorage.setItem("pcmg",strStorage);
	console.log("Gravou item no localStorage");

};


/*
{"nome":"","carreira":"","masp":"","dp":"","telefone":""}
*/