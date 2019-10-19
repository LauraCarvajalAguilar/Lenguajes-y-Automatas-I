//Proyecto del Tema 2. Expresiones Regulares
/* Integrantes:
    Carvajal Aguilar Laura Lizzet
    Mora Dzul Daniel Jesus
    Nahuat Pacheco Jazmin Mercedes
    Xooc Mis Andrea Guadalupe
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
