//Proyecto del Tema 2. Expresiones Regulares
/* Integrantes:
    Carvajal Aguilar Laura Lizzet
    Mora Dzul Daniel Jesus
    Nahuat Pacheco Jazmin Mercedes
    Xooc Mis Andrea Guadalupe
    Kauil Poot Leticia
*/

document.getElementById("cuadro1").addEventListener("change", function(){
	var fr = new FileReader("UTF-8");
	fr.onload = function(){
		document.getElementById("entrada").textContent = this.result;
	}
	fr.readAsText(this.files[0],'ISO-8859-1');
});	

document.getElementById("buscando").addEventListener("click",Buscar);
  function Buscar(){
    var bs = document.getElementById("entrada").innerHTML;
    var busEMS = bs.match(/[\w]+\S*[=]\S*[\w]+\S*[-|+||/]\S[\w]+|[\w]\S*[=][(][\w]{1}[+|-|*|/][\w]{1}[)]/gm);
    document.getElementById("Buscar").innerHTML=busEMS;
  }
  
document.getElementById("mostrando").addEventListener("click",Mostrar);
function Mostrar() {
    var ms = document.getElementById("entrada").innerHTML;
    var msEB = ms.match(/[a-z]+\s*(<=|>=|==)\s*[0-9]+\b/g);
    document.getElementById("Mostrar").innerHTML=msEB;
  }

document.getElementById("eliminar").addEventListener("click",eliminando);
function eliminando() {
	var eli = document.getElementById("entrada").innerHTML;
	var eliminarc = eli.replace(/\/\[\s\S]?\\/|([^\\:]|^)\/\/.$/gm,'$1')
	document.getElementById("eliminado").innerHTML = eliminarc;
}

document.getElementById("Encriptar").addEventListener("click",encriptando);
function encriptando() {
  var sust = document.getElementById("entrada").innerHTML;

	var remplazar = sust.replace(/[a|A]/g,"o");
	remplazar = remplazar.replace(/[p|P]/g,"z");
	remplazar = remplazar.replace(/[i|I]/g,"w");
	remplazar = remplazar.replace(/[n|N]/g,"a");
	remplazar = remplazar.replace(/[c|C]/g,"y");
	remplazar = remplazar.replace(/[r|R]/g,"i");
	remplazar = remplazar.replace(/[m|M]/g,"8");

  document.getElementById("encriptando").innerHTML = remplazo;
}
