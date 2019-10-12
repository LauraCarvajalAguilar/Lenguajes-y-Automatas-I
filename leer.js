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


document.getElementById("Eliminar").addEventListener("click",comentarios);
var codigo="public class pila { int n; /* TAMAÑO DE LA PILA O NUMERO DE ELEMETOS */ int tope; boolean estado; /* TRUE = PILA ESTA VACIA */ int [] datos;  public pila(int tam) /* PEDIMOS EL TAMAÑO DE LA PILA  PARA CREARLA */ {this.n=tam; datos = new int [tam]; tope=-1; /* APUNTA A LA PRIMERA POSICION */ } public void apilar (int valor) /* SE PIDE AL VALOR PARA APILAR */ { tope++; datos[tope]= valor; }  public int Desapilar(){int valor = datos[tope]; datos[tope]=0; tope--; return valor; } ";
var guardar;
guardar.onload = function comentarios(){
    codigo.replace(/\/\/.*|\/\*[^]*\*\//g, "");
    document.getElementById("comentarios").textContent = this.result;
  }
  
