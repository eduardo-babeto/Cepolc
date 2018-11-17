window.onload = function(){

	var pcmg = JSON.parse(localStorage.getItem("pcmg"));
	alert(pcmg.servidores[1].dp);
};