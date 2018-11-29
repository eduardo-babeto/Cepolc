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


/*	
{"servidores":[{"nome":"Honório","masp":"258851","cargo":"Investigador","delegacia":"DHPP/BH","telefone":"99398-6262"},{"nome":"Rocha","masp":"368055","cargo":"Agente de Administração","delegacia":"Instituto de Criminalística","telefone":"33301703"},{"nome":"Campos","masp":"343831","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-6363 / 99413-2609"},{"nome":"Guilherme","masp":"1242499","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99499-2533"},{"nome":"Anderson","masp":"1412334","cargo":"Investigador","delegacia":"DHPP/Betim (Rabecão)","telefone":"99798-3121 / 98281-1819"},{"nome":"Bruno","masp":"1169952","cargo":"Investigador","delegacia":"DHPP/Contagem (Rabecão)","telefone":"98422-9265"},{"nome":"Wander","masp":"1111935","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99633-2647 / 99398-6263"},{"nome":"Marcelino","masp":"546903","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-6464"},{"nome":"Aberlardo","masp":"1015147","cargo":"Investigador","delegacia":"DHPP/Betim (Rabecão)","telefone":"98885-1234 / 99587-1297"},{"nome":"Roberto","masp":"349101","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-6444"},{"nome":"Paulo","masp":"342387","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-6362"},{"nome":"Pedro","masp":"1255895","cargo":"Investigador","delegacia":"DHPP/Contagem (Rabecão)","telefone":"98819-8813"},{"nome":"Lana","masp":"342262","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99500-0559"},{"nome":"Leandro","masp":"1174178","cargo":"Investigador","delegacia":"DHPP/Contagem (Rabecão)","telefone":"99869-2205"},{"nome":"Jamerson","masp":"370109","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-4748"},{"nome":"Isaías","masp":"1257055","cargo":"Investigador","delegacia":"DHPP/Betim (Rabecão)","telefone":"99577-3018 / 98932-7928"},{"nome":"Cleidson","masp":"1242581","cargo":"Investigador","delegacia":"DHPP/Contagem (Rabecão)","telefone":"98811-4137"},{"nome":"Eduardo","masp":"1195226","cargo":"Investigador","delegacia":"DHPP/Betim (Rabecão)","telefone":"99296-8296"},{"nome":"Hudson","masp":"1174259","cargo":"Investigador","delegacia":"DHPP/Betim (Rabecão)","telefone":"99758-7473 / 98667-0104"},{"nome":"Lacerda","masp":"344124","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99398-6226"},{"nome":"Clemilson","masp":"386074","cargo":"Investigador","delegacia":"DHPP/Contagem (Rabecão)","telefone":"97154-4003 / 99978-5884"},{"nome":"Cristiano","masp":"1113133","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99141-6760 / 99251-6789"},{"nome":"Ricardo","masp":"1174066","cargo":"Investigador","delegacia":"DHPP/BH (Rabecão)","telefone":"99370-1144 / 97340-0081"},{"nome":"Jacques","masp":"1112023","cargo":"Perito","delegacia":"DRPC/Betim ","telefone":"99805-5470"},{"nome":"Lucas","masp":"1189311","cargo":"Perito","delegacia":"DRPC/Contagem","telefone":"99737-8538"},{"nome":"Magela","masp":"1383922","cargo":"Perito","delegacia":"DRPC/Santa Luzia","telefone":"99808-9367"},{"nome":"Maria Lúcia","masp":"349978","cargo":"Perito","delegacia":"Instituto de Criminalística","telefone":"98883-7851"},{"nome":"Daniel","masp":"1174378","cargo":"Perito (Trânsito)","delegacia":"Instituto de Criminalística","telefone":"98779-4510"},{"nome":"Dergival","masp":"1113065","cargo":"Perito","delegacia":"DRPC/ Contagem","telefone":"99737-8538"},{"nome":"Miguel","masp":"293680","cargo":"Perito (Trânsito)","delegacia":"Instituto de Criminalística","telefone":"3330-1703"},{"nome":"Thiago","masp":"1112724","cargo":"Perito","delegacia":"DRPC/ Betim","telefone":"99805-5470"},{"nome":"Daniel","masp":"1061112","cargo":"Perito","delegacia":"DRPC/ Contagem","telefone":"99737-8538"},{"nome":"Henrique","masp":"1229620","cargo":"Perito","delegacia":"DRPC/ Vespasiano","telefone":"99806-9467"},{"nome":"Aelson","masp":"668004","cargo":"Investigador","delegacia":"DHPP/ Betim","telefone":"99968-6765"},{"nome":"Aline","masp":"1229356","cargo":"Perito","delegacia":"DRPC/ Rib. Neves","telefone":"99370-2122"},{"nome":"Julio","masp":"1188415","cargo":"Delegado","delegacia":"Deplan 4","telefone":"3479-5375"},{"nome":"Romney","masp":"1111888","cargo":"Investigador","delegacia":"Deplan 4","telefone":"3479-5375"},{"nome":"Aylton","masp":"900178","cargo":"Servidor Administrativo","delegacia":"Instituto de Criminalística","telefone":"3330-1703"},{"nome":"Anderson","masp":"1145130","cargo":"Delegado","delegacia":"Deplan 3","telefone":"3389-4200 / 3389-4212"},{"nome":"Carlos Zuim","masp":"1061114","cargo":"Perito","delegacia":"DRPC/Betim","telefone":"99805-5470"},{"nome":"Manuela","masp":"1318466","cargo":"Perito","delegacia":"DRPC/Santa Luzia","telefone":"99808-9367"},{"nome":"Andre","masp":"1198748","cargo":"Perito","delegacia":"DRPC/Vespasiano","telefone":"99806-9467"},{"nome":"Murilo","masp":"1111404","cargo":"Perito","delegacia":"Instituto de Criminalística","telefone":"98458-5558"}]}
	
*/






