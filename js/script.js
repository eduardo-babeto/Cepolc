var select01 = document.getElementsByClassName("evolucoes")[1].getElementsByTagName("select")[0];
var select02 = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("select")[2]; //DISPENSOU P.
var select03 = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("select")[0];
var areaTexto = document.getElementsByClassName("textoEvolucoes")[0].getElementsByTagName("textarea")[0];
var btSelecionar = document.getElementsByClassName("btSelect")[0];
var btCopiar = document.getElementsByClassName("btCopiar");
var camposMasp = document.getElementsByClassName("campoMasp");

var pcmg;

var mensagem = "";

window.addEventListener("load",function(){
  var local = localStorage.getItem("pcmg");  
  pcmg = JSON.parse(local);
  atualiza_campos();
});

select01.addEventListener("change",function(){
  atualiza_campos();
});

select02.addEventListener("change",function(){
  var span = select02.nextElementSibling;
  var SelItem = span.nextElementSibling;
  if (select02.value == "DETERMINOU PERÍCIA"){
    span.hidden = true;
    SelItem.hidden = true;
  }
  else {
    span.hidden = false;
    SelItem.hidden = false; 
  }

});

select03.addEventListener("change",function(){  
  atualiza_campos();
});


btCopiar[0].addEventListener("click",function(){
  var sel04 = btCopiar[0].previousElementSibling;
  var span = sel04.previousElementSibling;
  var sel03 = span.previousElementSibling;
  var masp02 = sel03.previousElementSibling;
  var nome02 = masp02.previousElementSibling;
  var sel02 = nome02.previousElementSibling;
  var masp01 = sel02.previousElementSibling;
  var nome01 = masp01.previousElementSibling;
  var sel01 = nome01.previousElementSibling;
  var dp = sel01.previousElementSibling;
  
  if ((sel01.value == "O Delegado") || (sel01.value == "A Delegada")){
    mensagem =  dp.value + " ciente. " +sel01.value+" "+nome02.value+" (m. "+masp02.value+") "+sel03.value;
  }
  else {
    mensagem =  dp.value + " ciente. " +sel01.value + " "+nome01.value + " (m. "+masp01.value+") ";
    mensagem += sel02.value +" "+nome02.value+" (m. "+masp02.value+") que "+sel03.value;
  }
  if (sel03.value == "DISPENSOU PERÍCIA"){
    mensagem += " " + span.textContent + sel04.value;
  } 
  else {
    mensagem += " para o local.";
  }

  selecionar(1); // atualiza o campo de evolucoes e o seleciona

});

btCopiar[1].addEventListener("click",function(){

  var span = select01.previousElementSibling;
  var campoNome = select01.nextElementSibling;
  var campoMasp = campoNome.nextElementSibling;
  
  mensagem = span.textContent + select01.value;
  if (select01.value != "."){
    mensagem += " " + campoNome.value + " (m. "+ campoMasp.value + ")."; 
  }

  selecionar(1); // atualiza o campo de evolucoes e o seleciona

});

btCopiar[2].addEventListener("click",function(){

  var span02 = btCopiar[2].previousElementSibling;
  var sel02 = span02.previousElementSibling;
  var span01 = sel02.previousElementSibling;
  var campoMasp = span01.previousElementSibling;
  var campoNome = campoMasp.previousElementSibling;
  var sel01 = campoNome.previousElementSibling;

  mensagem = sel01.value +" "+campoNome.value+" (m. "+campoMasp.value+" ) "+span01.textContent;
  mensagem+= sel02.value + " "+span02.textContent;

  selecionar(1); // atualiza o campo de evolucoes e o seleciona


});

btCopiar[3].addEventListener("click",function(){

  var campoMasp = btCopiar[3].previousElementSibling;
  var campoNome = campoMasp.previousElementSibling;
  var sel02 = campoNome.previousElementSibling;
  var span01 = sel02.previousElementSibling;
  var sel01 = span01.previousElementSibling;  

  mensagem = sel01.value + " "+span01.textContent +" "+sel02.value+" "+campoNome.value;
  mensagem+= " (m. "+campoMasp.value+").";

  selecionar(1); // atualiza o campo de evolucoes e o seleciona

});

btCopiar[4].addEventListener("click",function(){

  var campoMasp = btCopiar[4].previousElementSibling;
  var campoNome = campoMasp.previousElementSibling;  
  var sel01 = campoNome.previousElementSibling;
  var span = sel01.previousElementSibling;
  var dp = span.previousElementSibling;

  mensagem = dp.value + " "+span.textContent+" "+sel01.value+" "+campoNome.value+" (m. "+campoMasp.value+").";
  selecionar(1); // atualiza o campo de evolucoes e o seleciona

});

btCopiar[5].addEventListener("click",function(){

  var span = btCopiar[5].previousElementSibling;
  var sel01 = span.previousElementSibling;  

  mensagem = sel01.value + " "+span.textContent;

  selecionar(1); // atualiza o campo de evolucoes e o seleciona

});

for (var i = 0; i < camposMasp.length;i++){  
  camposMasp[i].addEventListener("keyup",function(e){
    if(e.keyCode == 13){
      var m = e.target.value;
      e.target.previousElementSibling.value = pesquisa_masp(m);      
    }    
  });
}

function pesquisa_masp(m){  
  for (var i=0;i < pcmg.servidores.length;i++){
    if (pcmg.servidores[i].masp == m){
      return pcmg.servidores[i].nome;
    }
  }
  return "";
}

btSelecionar.addEventListener("click", selecionar);

function selecionar (n) {
  if(n==1) {areaTexto.value = mensagem}
  window.scrollTo(100,1000);
  areaTexto.select();
}

function atualiza_campos(){

  var campoNome = select01.nextElementSibling;
  var campoMasp = campoNome.nextElementSibling;
  var sel03 = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("select")[2];
  var sel04 = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("select")[3];
  var span = document.getElementsByClassName("evolucoes")[0].getElementsByTagName("span")[0];
  var campoNome02 = select03.nextElementSibling;
  var campoMasp02 = campoNome02.nextElementSibling;
  var sel01 = campoMasp02.nextElementSibling;  
  

  if (select01.value == ".") {
    campoNome.hidden = true;
    campoMasp.hidden = true;
  }
  else {
    campoNome.hidden = false;
    campoMasp.hidden = false;
  }  

  
  if (sel03.value == "DETERMINOU PERÍCIA") {
    sel04.hidden = true;
    span.hidden = true;
  }
  else {
    sel04.hidden = false;
    span.hidden = false;
  }  


  if ((select03.value =="O Delegado") || (select03.value == "A Delegada")){
    campoNome02.hidden = true;
    campoMasp02.hidden = true;
    sel01.hidden = true;
  }
  else{
    campoNome02.hidden = false;
    campoMasp02.hidden = false;
    sel01.hidden = false;
  }
  
	
}