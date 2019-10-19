import java.util.*;
public class ejercicio5 {

    public static void main (String[] args){
    	
    	Scanner sc = new Scanner(System.in);
    	int n, res, suma, resta;;
    	System.out.println("Captura el valor:");
    	n=sc.nextInt();
        suma = 5+n;
    	resta = 8-n;
    	
        if (n >= 2) {
    		System.out.println("N es Mayor y positivo");
	    } else if (n <= 2) {
	    	System.out.println("N es Menor y Positivo");
	    } else {
	    	System.out.pritnln("N es Negativo");
	    }
      	System.out.println("El resultado es:" + sumar_dig(n)); //SE IMPRIME EL RESULTADO
}
   
public static int sumar_dig(int n) { //INICIO METODO
    if (n == 0) {  //INICIO IF   //caso base
            return n;
    } //FIN IF
   else { //INICIO ELSE
            return sumar_dig (n / 10) + (n % 10);
        } //FIN ELSE 
    } //FIN METODO
}
